import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const';
import {
  requireAuthorization,
  requireLogout,
  setAuthorizationInfo,
  setIsAuthorized
} from '../actions';
import type {UserProcess} from '../types';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  isAuthorized: false,
  authorizationInfo: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(requireLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.isAuthorized = false;
    })
    .addCase(setIsAuthorized, (state, action) => {
      state.isAuthorized = action.payload;
    })
    .addCase(setAuthorizationInfo, (state, action) => {
      state.authorizationInfo = action.payload;
    });
});

export {
  userReducer
};
