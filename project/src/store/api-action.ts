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
  setOffers,
  updateOffer
} from './actions';
import {adaptAuthorizationInfoToClient, adaptCommentToClient, adaptOfferToClient} from '../adapter';
import {ApiRoute, AppRoute, AuthorizationStatus} from '../const';
import {removeToken, setToken} from '../services/token';
import type {ThunkActionResult} from '../store/types';
import type {AuthorizationData, CommentPost, RawAuthorizationInfo, RawComment, RawOffer} from '../types';
import {getCities, replaceRouteParams} from '../utils';

const fetchOfferAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const url = replaceRouteParams(ApiRoute.Hotels$Id, {id});
    await await api.get<RawOffer>(url)
      .then(({data: offerData}) => {
        dispatch(setOffer(adaptOfferToClient(offerData)));
      })
      .catch((error) => {
        dispatch(redirectToRoute(AppRoute.NotFound));
      });

    const nearbyUrl = replaceRouteParams(ApiRoute.Hotels$IdNearby, {id});
    const commentsUrl = replaceRouteParams(ApiRoute.Comments$Id, {id});
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

const fetchOfferIsFavorite = (
  id: number,
  status: number,
): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const url = replaceRouteParams(ApiRoute.Favorite$Id$Status, {id, status});
    const {data: offer} = await api.post<RawOffer>(url);

    dispatch(updateOffer(adaptOfferToClient(offer)));
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
    const url = replaceRouteParams(ApiRoute.Comments$Id, {id});
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
    await api.get<RawAuthorizationInfo>(ApiRoute.Login)
      .then(({data}) => {
        const adaptedData = adaptAuthorizationInfoToClient(data);

        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(setIsAuthorized(true));
        dispatch(setAuthorizationInfo(adaptedData));
      })
      .catch((error) => {
        toast.info('Please sign in');
      });
  };

const loginAction = (authData: AuthorizationData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.post<RawAuthorizationInfo>(ApiRoute.Login, {
      email: authData.login,
      password: authData.password,
    })
      .then(({data}) => {
        const adaptedData = adaptAuthorizationInfoToClient(data);

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
  fetchOfferIsFavorite,
  fetchOffersAction,
  reviewFormSubmitAction,
  checkAuthAction,
  loginAction,
  logoutAction
};
