import {createAction} from '@reduxjs/toolkit';
import {AppRoute, AuthorizationStatus, CityName, SortType} from '../const';
import type {AuthorizationInfo, Cities, Comment, Offer} from '../types';
import {ActionType} from './const';

const setOffer = createAction<Offer | null>(ActionType.SetOffer);

const setOffers = createAction<Offer[]>(ActionType.SetOffers);

const setCities = createAction<Cities>(ActionType.SetCities);

const setNearbyOffers = createAction<Offer[]>(ActionType.SetNearbyOffers);

const setComments = createAction<Comment[]>(ActionType.SetComments);

const setActiveCity = createAction<CityName>(ActionType.SetActiveCity);

const setSortType = createAction<SortType>(ActionType.SetSortType);

const requireAuthorization = createAction<AuthorizationStatus>(ActionType.RequireAuthorization);

const requireLogout = createAction(ActionType.RequireLogout);

const setIsAuthorized = createAction<boolean>(ActionType.SetIsAuthorized);

const setAuthorizationInfo = createAction<AuthorizationInfo>(ActionType.SetAuthorizationInfo);

const redirectToRoute = createAction<AppRoute>(ActionType.RedirectToRoute);

export {
  setOffer,
  setOffers,
  setCities,
  setNearbyOffers,
  setComments,
  setActiveCity,
  setSortType,
  requireAuthorization,
  requireLogout,
  setIsAuthorized,
  setAuthorizationInfo,
  redirectToRoute
};
