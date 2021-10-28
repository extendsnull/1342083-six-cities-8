import {INITIAL_CITY, ActionType} from '../const';
import type {Actions, State} from '../types';

const initialState: State = {
  activeCity: INITIAL_CITY,
  offers: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetActiveCity: {
      return {
        ...state,
        activeCity: action.payload,
      };
    }
    case ActionType.SetOffers: {
      return {
        ...state,
        offers: action.payload,
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
