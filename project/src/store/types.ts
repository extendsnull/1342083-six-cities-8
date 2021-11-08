import {AxiosInstance} from 'axios';
import {Action} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {
  AuthorizationStatus,
  CityName,
  SortType
} from '../const';
import type {
  AuthorizationInfo,
  Cities,
  Comment,
  Offer
} from '../types';
import type {RootState} from './root-reducer';

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

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;

export type {
  AppData,
  UserProcess,
  State,
  ThunkActionResult,
  ThunkAppDispatch
};
