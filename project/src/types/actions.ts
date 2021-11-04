import {AxiosInstance} from 'axios';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {
  setActiveCity,
  setOffers,
  setCities,
  setLoadState,
  setAuthInfo,
  requireAuthorization,
  requireLogout,
  redirectToRoute
} from '../store/action';
import type State from './state';

type Actions =
  | ReturnType<typeof setActiveCity>
  | ReturnType<typeof setOffers>
  | ReturnType<typeof setCities>
  | ReturnType<typeof setLoadState>
  | ReturnType<typeof setAuthInfo>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export type {
  Actions,
  ThunkActionResult,
  ThunkAppDispatch
};
