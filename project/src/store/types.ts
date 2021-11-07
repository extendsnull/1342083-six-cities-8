import {AxiosInstance} from 'axios';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {
  setOffer,
  setNearbyOffers,
  setComments,
  setOffers,
  setCities,
  setActiveCity,
  setAuthorizationInfo,
  setSortType,
  requireAuthorization,
  setAuthorization,
  requireLogout,
  redirectToRoute
} from '../store/action';
import {
  AuthorizationStatus,
  CityName,
  SortType
} from '../const';
import type {RootState} from './root-reducer';
import type {
  AuthorizationInfo,
  Cities,
  Comment,
  Offer
} from '../types';

type AppData = {
  offer: Offer | null;
  offers: Offer[];
  cities: Cities;
  nearbyOffers: Offer[];
  comments: Comment[];
  activeCity: CityName;
  sortType: SortType;
};

type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  isAuthorized: boolean;
  authorizationInfo: AuthorizationInfo | null;
};

type State = RootState;

type Actions =
  | ReturnType<typeof setOffer>
  | ReturnType<typeof setNearbyOffers>
  | ReturnType<typeof setComments>
  | ReturnType<typeof setOffers>
  | ReturnType<typeof setCities>
  | ReturnType<typeof setActiveCity>
  | ReturnType<typeof setAuthorizationInfo>
  | ReturnType<typeof setSortType>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof setAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export type {
  AppData,
  UserProcess,
  State,
  Actions,
  ThunkActionResult,
  ThunkAppDispatch
};
