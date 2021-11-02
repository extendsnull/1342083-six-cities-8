import {ActionType, AuthorizationStatus, CityName} from '../const';
import type {Actions, State} from '../types';

const initialState: State = {
  activeCity: CityName.Paris,
  offers: [],
  cities: {},
  isLoad: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetActiveCity: {
      return {
        ...state,
        activeCity: action.payload.activeCity,
      };
    }
    case ActionType.SetOffers: {
      return {
        ...state,
        offers: action.payload.offers,
      };
    }
    case ActionType.SetCities: {
      return {
        ...state,
        cities: action.payload.cities,
      };
    }
    case ActionType.SetLoadState: {
      return {
        ...state,
        isLoad: action.payload.isLoad,
      };
    }
    case ActionType.RequireAuthorization: {
      return {
        ...state,
        authorizationStatus: action.payload.authorizationStatus,
      };
    }
    case ActionType.RequireLogout: {
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NoAuth,
      };
    }
    default: {
      return state;
    }
  }
};

export {
  initialState,
  reducer
};
