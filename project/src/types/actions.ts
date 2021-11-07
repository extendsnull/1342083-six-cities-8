import {AxiosInstance} from 'axios';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {
  setOffer,
  setNearbyOffers,
  setComments,
  setOffers,
  setCities,
  setActiveCity,
  setAuthInfo,
  setSortType,
  requireAuthorization,
  setAuthorization,
  requireLogout,
  redirectToRoute
} from '../store/action';
import type {State} from './state';

type Actions =
  | ReturnType<typeof setOffer>
  | ReturnType<typeof setNearbyOffers>
  | ReturnType<typeof setComments>
  | ReturnType<typeof setOffers>
  | ReturnType<typeof setCities>
  | ReturnType<typeof setActiveCity>
  | ReturnType<typeof setAuthInfo>
  | ReturnType<typeof setSortType>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof setAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export type {
  Actions,
  ThunkActionResult,
  ThunkAppDispatch
};
