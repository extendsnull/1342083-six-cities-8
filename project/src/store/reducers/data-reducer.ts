import {ActionType, CityName, SortType} from '../../const';
import type {Actions, AppData} from '../types';

const initialState: AppData = {
  offer: null,
  offers: [],
  cities: {},
  nearbyOffers: [],
  comments: [],
  activeCity: CityName.Paris,
  sortType: SortType.Popular,
};

const dataReducer = (state = initialState, action: Actions): AppData => {
  switch (action.type) {
    case ActionType.SetOffer: {
      return {
        ...state,
        offer: action.payload,
      };
    }
    case ActionType.SetOffers: {
      return {
        ...state,
        offers: action.payload,
      };
    }
    case ActionType.SetCities: {
      return {
        ...state,
        cities: action.payload,
      };
    }
    case ActionType.SetNearbyOffers: {
      return {
        ...state,
        nearbyOffers: action.payload,
      };
    }
    case ActionType.SetComments: {
      return {
        ...state,
        comments: action.payload,
      };
    }
    case ActionType.SetActiveCity: {
      return {
        ...state,
        activeCity: action.payload,
      };
    }
    case ActionType.SetSortType: {
      return {
        ...state,
        sortType: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export {
  dataReducer
};
