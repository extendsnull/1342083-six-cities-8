import {ActionType, AuthorizationStatus, CityName} from '../const';
import type {Actions, State} from '../types';

const initialState: State = {
  activeCity: CityName.Paris,
  offers: [],
  cities: {},
  authInfo: null,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    case ActionType.SetOfferDetails: {
      return {
        ...state,
        nearbyOffers: action.payload.nearbyOffers,
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
