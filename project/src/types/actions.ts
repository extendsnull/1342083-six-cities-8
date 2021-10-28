import {
  setActiveCity,
  setOffers
} from '../store/action';

type Actions =
  | ReturnType<typeof setActiveCity>
  | ReturnType<typeof setOffers>;

export default Actions;
