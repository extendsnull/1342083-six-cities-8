import {requireAuthorization, requireLogout, setCities, setLoadState, setOffers} from './action';
import {ApiRoute, AuthorizationStatus} from '../const';
import {removeToken, setToken} from '../services/token';
import {adaptOfferToClient} from '../services/adapter';
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
    await api.get(ApiRoute.Login).then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    });
  };

const loginAction = (authData: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data: {token}} = await api.post<RawAuthInfo>(ApiRoute.Login, {
      email: authData.login,
      password: authData.password,
    });
    setToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
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
