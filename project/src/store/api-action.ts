import {toast} from 'react-toastify';
import {
  redirectToRoute,
  requireAuthorization,
  requireLogout,
  setAuthorizationInfo,
  setCities,
  setComments,
  setIsAuthorized,
  setNearbyOffers,
  setOffer,
  setOffers
} from './actions';
import {adaptAuthToClient, adaptCommentToClient, adaptOfferToClient} from '../adapter';
import {ApiRoute, AppRoute, AuthorizationStatus} from '../const';
import {removeToken, setToken} from '../services/token';
import type {ThunkActionResult} from '../store/types';
import type {AuthorizationData, CommentPost, RawAuthorizationInfo, RawComment, RawOffer} from '../types';
import {getCities, replaceIdParam} from '../utils';

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
    await api.get<RawAuthorizationInfo>(ApiRoute.Login).then(({data}) => {
      const adaptedData = adaptAuthToClient(data);

      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setIsAuthorized(true));
      dispatch(setAuthorizationInfo(adaptedData));
    });
  };

const loginAction = (authData: AuthorizationData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.post<RawAuthorizationInfo>(ApiRoute.Login, {
      email: authData.login,
      password: authData.password,
    })
      .then(({data}) => {
        const adaptedData = adaptAuthToClient(data);

        setToken(adaptedData.token);
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(setIsAuthorized(true));
        dispatch(setAuthorizationInfo(adaptedData));
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
  reviewFormSubmitAction,
  checkAuthAction,
  loginAction,
  logoutAction
};
