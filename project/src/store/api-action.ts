import {ThunkActionResult} from '../types';
import {requireAuthorization, requireLogout, setCities, setLoadState, setOffers} from './action';
import {ApiRoute, AuthorizationStatus} from '../const';
import {AuthInfo, RawOffer} from '../types';
import {removeToken, setToken} from '../services/token';
import {adaptOfferToClient} from '../services/adapter';
import { getCities } from '../utils';

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

const loginAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<AuthInfo>(ApiRoute.Login);
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
