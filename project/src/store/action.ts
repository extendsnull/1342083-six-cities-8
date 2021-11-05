import {ActionType, AppRoute, AuthorizationStatus, CityName} from '../const';
import type {AuthInfo, Cities, Comment, Offer} from '../types';

const setOffer = (offer: Offer) => ({
  type: ActionType.SetOffer,
  payload: {
    offer,
  },
} as const);

const setNearbyOffers = (nearbyOffers: Offer[]) => ({
  type: ActionType.SetNearbyOffers,
  payload: {
    nearbyOffers,
  },
} as const);

const setComments = (comments: Comment[]) => ({
  type: ActionType.SetComments,
  payload: {
    comments,
  },
} as const);

const setOffers = (offers: Offer[]) => ({
  type: ActionType.SetOffers,
  payload: {
    offers,
  },
} as const);

const setCities = (cities: Cities) => ({
  type: ActionType.SetCities,
  payload: {
    cities,
  },
} as const);

const setActiveCity = (activeCity: CityName) => ({
  type: ActionType.SetActiveCity,
  payload: {
    activeCity,
  },
} as const);

const setAuthInfo = (authInfo: AuthInfo) => ({
  type: ActionType.SetAuthInfo,
  payload: {
    authInfo,
  },
} as const);

const requireAuthorization = (status: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: {
    authorizationStatus: status,
  },
} as const);

const setAuthorization = (isAuthorized: boolean) => ({
  type: ActionType.SetAuthorization,
  payload: {
    isAuthorized,
  },
} as const);

const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);

export {
  setOffer,
  setNearbyOffers,
  setComments,
  setOffers,
  setCities,
  setActiveCity,
  setAuthInfo,
  requireAuthorization,
  setAuthorization,
  requireLogout,
  redirectToRoute
};
