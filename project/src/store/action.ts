import {ActionType, CityName} from '../const';
import type {Offer} from '../types';

const setActiveCity = (city: CityName) => ({
  type: ActionType.SetActiveCity,
  payload: city,
} as const);

const setOffers = (offers: Offer[]) => ({
  type: ActionType.SetOffers,
  payload: offers,
} as const);

export {
  setActiveCity,
  setOffers
};
