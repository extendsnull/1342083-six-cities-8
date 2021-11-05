import {toast} from 'react-toastify';
import {adaptAuthToClient, adaptCommentToClient, adaptOfferToClient} from '../services/adapter';
import {removeToken, setToken} from '../services/token';
import {
  setOffer,
  setOfferDetails,
  setOffers,
  setCities,
  setAuthInfo,
  requireAuthorization,
  requireLogout,
  redirectToRoute
} from './action';
import {ApiRoute, AppRoute, AuthorizationStatus} from '../const';
import {getCities} from '../utils';
import type {AuthData, RawAuthInfo, RawComment, RawOffer, ThunkActionResult} from '../types';

const fetchOfferAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data: offerData} = await api.get<RawOffer>(`/hotels/${id}`);
      dispatch(setOffer(adaptOfferToClient(offerData)));
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }

    try {
      const [
        {data: nearbyOffersData},
        {data: commentsData},
      ] = await Promise.all([
        api.get<RawOffer[]>(`/hotels/${id}/nearby`),
        api.get<RawComment[]>(`/comments/${id}`),
      ]);
      dispatch(setOfferDetails(
        nearbyOffersData.map(adaptOfferToClient),
        commentsData.map(adaptCommentToClient),
      ));
    } catch {
      dispatch(setOfferDetails([], []));
    }
  };

const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get<RawOffer[]>(ApiRoute.Hotels);
    const offers = data.map(adaptOfferToClient);
    const cities = getCities(offers);

    dispatch(setOffers(offers));
    dispatch(setCities(cities));
  };

const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get<RawAuthInfo>(ApiRoute.Login).then(({data}) => {
      const adaptedData = adaptAuthToClient(data);

      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setAuthInfo(adaptedData));
    });
  };

const loginAction = (authData: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.post<RawAuthInfo>(ApiRoute.Login, {
      email: authData.login,
      password: authData.password,
    })
      .then(({data}) => {
        const adaptedData = adaptAuthToClient(data);

        setToken(adaptedData.token);
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(setAuthInfo(adaptedData));
        dispatch(redirectToRoute(AppRoute.Main));
      })
      .catch((error) => {
        toast.error(error.data.error);
      });
  };

const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.delete(ApiRoute.Logout);
    removeToken();
    dispatch(requireLogout());
  };


export {
  fetchOfferAction,
  fetchOffersAction,
  checkAuthAction,
  loginAction,
  logoutAction
};
