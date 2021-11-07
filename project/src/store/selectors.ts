import {AuthorizationStatus, CityName, SortType} from '../const';
import type {AuthorizationInfo, Cities, Comment, Offer} from '../types';
import {getOffersByCity, sortOffersByType} from '../utils';
import {NameSpace} from './const';
import type {State} from './types';

const getOffer = (state: State): Offer | null => state[NameSpace.Data].offer;

const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;

const getFilteredAndSortedOffers = (state: State): Offer[] =>
  sortOffersByType(getOffersByCity(state[NameSpace.Data].offers, state[NameSpace.Data].activeCity), state[NameSpace.Data].sortType);

const getCities = (state: State): Cities => state[NameSpace.Data].cities;

const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Data].nearbyOffers;

const getComments = (state: State): Comment[] => state[NameSpace.Data].comments;

const getActiveCity = (state: State): CityName => state[NameSpace.Data].activeCity;

const getSortType = (state: State): SortType => state[NameSpace.Data].sortType;

const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

const getIsAuthorized = (state: State): boolean => state[NameSpace.User].isAuthorized;

const getAuthorizationInfo= (state: State): AuthorizationInfo | null => state[NameSpace.User].authorizationInfo;

export {
  getOffer,
  getOffers,
  getFilteredAndSortedOffers,
  getCities,
  getNearbyOffers,
  getComments,
  getActiveCity,
  getSortType,
  getAuthorizationStatus,
  getIsAuthorized,
  getAuthorizationInfo
};
