import {ActionType, AuthorizationStatus} from '../../const';
import type {Actions, UserProcess} from '../types';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  isAuthorized: false,
  authorizationInfo: null,
};

const userReducer = (state = initialState, action: Actions): UserProcess => {
  switch (action.type) {
    case ActionType.RequireAuthorization: {
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    }
    case ActionType.SetAuthorization: {
      return {
        ...state,
        isAuthorized: action.payload,
      };
    }
    case ActionType.RequireLogout: {
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NoAuth,
      };
    }
    case ActionType.SetAuthorizationInfo: {
      return {
        ...state,
        authorizationInfo: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export {
  userReducer
};
