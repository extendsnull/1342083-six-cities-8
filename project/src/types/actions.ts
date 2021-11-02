import {AxiosInstance} from 'axios';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {
  setActiveCity,
  setOffers,
  setCities,
  setLoadState,
  requireAuthorization,
  requireLogout
} from '../store/action';
import State from './state';

type Actions =
  | ReturnType<typeof setActiveCity>
  | ReturnType<typeof setOffers>
  | ReturnType<typeof setCities>
  | ReturnType<typeof setLoadState>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export type {
  ThunkActionResult,
  ThunkAppDispatch
};

export default Actions;
