import {ActionType, AppRoute, AuthorizationStatus, CityName} from '../const';
import type {AuthInfo, Cities, Comment, Offer} from '../types';

const setOffer = (offer: Offer) => ({
  type: ActionType.SetOffer,
  payload: {
    offer,
  },
} as const);

const setOfferDetails = (nearbyOffers: Offer[], comments: Comment[]) => ({
  type: ActionType.SetOfferDetails,
  payload: {
    nearbyOffers,
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

const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);

export {
  setOffer,
  setOfferDetails,
  setOffers,
  setCities,
  setActiveCity,
  setAuthInfo,
  requireAuthorization,
  requireLogout,
  redirectToRoute
};
