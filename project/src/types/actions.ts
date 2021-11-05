import {AxiosInstance} from 'axios';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {
  setActiveCity,
  setOffers,
  setCities,
  setAuthInfo,
  requireAuthorization,
  requireLogout,
  redirectToRoute,
  setOffer,
  setNearbyOffers,
  setComments
} from '../store/action';
import type {State} from './state';

type Actions =
  | ReturnType<typeof setActiveCity>
  | ReturnType<typeof setOffers>
  | ReturnType<typeof setCities>
  | ReturnType<typeof setAuthInfo>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof setOffer>
  | ReturnType<typeof setNearbyOffers>
  | ReturnType<typeof setComments>;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export type {
  Actions,
  ThunkActionResult,
  ThunkAppDispatch
};
