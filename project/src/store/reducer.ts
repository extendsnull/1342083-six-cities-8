import {ActionType, AuthorizationStatus, CityName, SortType} from '../const';
import type {Actions, State} from '../types';

const initialState: State = {
  activeCity: CityName.Paris,
  offers: [],
  cities: {},
  authInfo: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isAuthorized: false,
  sortType: SortType.Popular,
  offer: null,
  comments: [],
  nearbyOffers: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetOffer: {
      return {
        ...state,
        offer: action.payload.offer,
      };
    }
    case ActionType.SetNearbyOffers: {
      return {
        ...state,
        nearbyOffers: action.payload.nearbyOffers,
      };
    }
    case ActionType.SetComments: {
      return {
        ...state,
        comments: action.payload.comments,
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
    case ActionType.SetActiveCity: {
      return {
        ...state,
        activeCity: action.payload.activeCity,
      };
    }
    case ActionType.RequireAuthorization: {
      return {
        ...state,
        authorizationStatus: action.payload.authorizationStatus,
      };
    }
    case ActionType.SetSortType: {
      return {
        ...state,
        sortType: action.payload.sortType,
      };
    }
    case ActionType.SetAuthorization: {
      return {
        ...state,
        isAuthorized: action.payload.isAuthorized,
      };
    }
    case ActionType.RequireLogout: {
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NoAuth,
      };
    }
    case ActionType.SetAuthInfo: {
      return {
        ...state,
        authInfo: action.payload.authInfo,
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
