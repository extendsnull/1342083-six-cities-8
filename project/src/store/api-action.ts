import axios from 'axios';
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
import {ApiRoute, AppRoute, AuthorizationStatus, ToastMessage} from '../const';
import {removeToken, setToken} from '../services/token';
import type {ThunkActionResult} from '../store/types';
import type {AuthorizationData, CommentPost, RawAuthorizationInfo, RawComment, RawOffer} from '../types';
import {getCities, replaceRouteParams} from '../utils';

const fetchOfferAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const offerUrl = replaceRouteParams(ApiRoute.Hotels$Id, {id});
      const {data: rawOffer} = await api.get<RawOffer>(offerUrl);

      dispatch(setOffer(adaptOfferToClient(rawOffer)));
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.NotFound));

      if (axios.isAxiosError(error)) {
        toast.error(ToastMessage.DefaultError);
      }

      return;
    }

    try {
      const nearbyUrl = replaceRouteParams(ApiRoute.Hotels$IdNearby, {id});
      const {data: rawNearbyOffers} = await api.get<RawOffer[]>(nearbyUrl);

      dispatch(setNearbyOffers(rawNearbyOffers.map(adaptOfferToClient)));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(ToastMessage.NearbyOffersError);
      }
    }

    try {
      const commentsUrl = replaceRouteParams(ApiRoute.Comments$Id, {id});
      const {data: rawComments} = await api.get<RawComment[]>(commentsUrl);

      dispatch(setComments(rawComments.map(adaptCommentToClient)));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(ToastMessage.CommentsError);
      }
    }
  };

const fetchOfferIsFavorite = (id: number, status: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const url = replaceRouteParams(ApiRoute.Favorite$Id$Status, {id, status});
      const {data: offer} = await api.post<RawOffer>(url);

      dispatch(updateOffer(adaptOfferToClient(offer)));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(ToastMessage.DefaultError);
      }
    }
  };

const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.get<RawOffer[]>(ApiRoute.Hotels);
      const offers = data.map(adaptOfferToClient);
      const cities = getCities(offers);

      dispatch(setOffers(offers));
      dispatch(setCities(cities));
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.NotFound));

      if (axios.isAxiosError(error)) {
        toast.error(ToastMessage.DefaultError);
      }
    }
  };

const reviewFormSubmitAction = (id: number, comment: CommentPost): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const url = replaceRouteParams(ApiRoute.Comments$Id, {id});
      const {data: comments} = await api.post<RawComment[]>(url, comment);

      dispatch(setComments(comments.map(adaptCommentToClient)));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(ToastMessage.DefaultError);
      }
    }
  };

const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data: rawAuthorizationInfo} = await api.get<RawAuthorizationInfo>(ApiRoute.Login);
      const authorizationInfo = adaptAuthorizationInfoToClient(rawAuthorizationInfo);

      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setIsAuthorized(true));
      dispatch(setAuthorizationInfo(authorizationInfo));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.info(ToastMessage.SignIn);
      }
    }
  };

const loginAction = (authData: AuthorizationData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data: rawAthorizationInfo} = await api.post<RawAuthorizationInfo>(ApiRoute.Login, {
        email: authData.login,
        password: authData.password,
      });
      const athorizationInfo = adaptAuthorizationInfoToClient(rawAthorizationInfo);

      setToken(athorizationInfo.token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setIsAuthorized(true));
      dispatch(setAuthorizationInfo(athorizationInfo));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(ToastMessage.LoginError);
      }
    }
  };

const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.delete(ApiRoute.Logout);

      removeToken();
      dispatch(requireLogout());
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(ToastMessage.DefaultError);
      }
    }
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
