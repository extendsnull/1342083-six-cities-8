import {ActionType, CityName} from '../const';
import type {Offer} from '../types';

const setActiveCity = (activeCity: CityName) => ({
  type: ActionType.SetActiveCity,
  payload: {
    activeCity,
  },
} as const);

const setOffers = (offers: Offer[]) => ({
  type: ActionType.SetOffers,
  payload: {
    offers,
  },
} as const);

export {
  setActiveCity,
  setOffers
};
