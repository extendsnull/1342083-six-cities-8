import {toast} from 'react-toastify';
import {adaptAuthToClient, adaptCommentToClient, adaptOfferToClient} from '../services/adapter';
import {removeToken, setToken} from '../services/token';
import {
  setOffer,
  setOffers,
  setCities,
  setAuthInfo,
  requireAuthorization,
  requireLogout,
  redirectToRoute,
  setNearbyOffers,
  setComments,
  setAuthorization
} from './action';
import {ApiRoute, AppRoute, AuthorizationStatus} from '../const';
import {getCities, replaceIdParam} from '../utils';
import type {AuthData, CommentPost, RawAuthInfo, RawComment, RawOffer, ThunkActionResult} from '../types';

const fetchOfferAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const url = replaceIdParam(ApiRoute.Hotels$Id, id);
    await await api.get<RawOffer>(url)
      .then(({data: offerData}) => {
        dispatch(setOffer(adaptOfferToClient(offerData)));
      })
      .catch((error) => {
        dispatch(redirectToRoute(AppRoute.NotFound));
      });

    const nearbyUrl = replaceIdParam(ApiRoute.Hotels$IdNearby, id);
    const commentsUrl = replaceIdParam(ApiRoute.Comments$Id, id);
    await Promise.all([
      api.get<RawOffer[]>(nearbyUrl),
      api.get<RawComment[]>(commentsUrl),
    ])
      .then((response) => {
        const [{data: nearbyOffersData}, {data: commentsData}] = response;
        dispatch(setNearbyOffers(nearbyOffersData.map(adaptOfferToClient)));
        dispatch(setComments(commentsData.map(adaptCommentToClient)));
      })
      .catch((error) => {
        toast.error(error.data.error);
      });
  };

const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get<RawOffer[]>(ApiRoute.Hotels);
    const offers = data.map(adaptOfferToClient);
    const cities = getCities(offers);

    dispatch(setOffers(offers));
    dispatch(setCities(cities));
  };

const reviewFormSubmitAction = (
  id: number,
  comment: CommentPost,
): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const url = replaceIdParam(ApiRoute.Comments$Id, id);
    await api.post<RawComment[]>(url, comment)
      .then(({data: comments}) => {
        dispatch(setComments(comments.map(adaptCommentToClient)));
      })
      .catch((error) => {
        toast.error(error.data.error);
      });
  };

const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get<RawAuthInfo>(ApiRoute.Login).then(({data}) => {
      const adaptedData = adaptAuthToClient(data);

      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setAuthorization(true));
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
        dispatch(setAuthorization(true));
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
    dispatch(setAuthorization(false));
    dispatch(requireLogout());
  };


export {
  fetchOfferAction,
  fetchOffersAction,
  reviewFormSubmitAction,
  checkAuthAction,
  loginAction,
  logoutAction
};
