import {ActionType, AuthorizationStatus, CityName} from '../const';
import type {Cities, Offer} from '../types';

const setActiveCity = (activeCity: CityName) => ({
  type: ActionType.SetActiveCity,
  payload: {
    activeCity,
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

const setLoadState = (isLoad: boolean) => ({
  type: ActionType.SetLoadState,
  payload: {
    isLoad,
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

export {
  setActiveCity,
  setOffers,
  setCities,
  setLoadState,
  requireAuthorization,
  requireLogout
};
