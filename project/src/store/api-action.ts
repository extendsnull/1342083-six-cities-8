import {toast} from 'react-toastify';
import {adaptAuthToClient, adaptOfferToClient} from '../services/adapter';
import {removeToken, setToken} from '../services/token';
import {redirectToRoute, requireAuthorization, requireLogout, setAuthInfo, setCities, setLoadState, setOffers} from './action';
import {ApiRoute, AppRoute, AuthorizationStatus} from '../const';
import {getCities} from '../utils';
import type {AuthData, RawAuthInfo, RawOffer, ThunkActionResult} from '../types';

const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    dispatch(setLoadState(true));

    const {data} = await api.get<RawOffer[]>(ApiRoute.Hotels);
    const offers = data.map(adaptOfferToClient);
    const cities = getCities(offers);

    dispatch(setLoadState(false));
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
  fetchOffersAction,
  checkAuthAction,
  loginAction,
  logoutAction
};
