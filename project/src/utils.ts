import {RATING_MAX_VALUE, AppRoute} from './const';

const getOfferUrl = (id: number): string => AppRoute.Offer.replace(':id', id.toString());

const getRatingValue = (rating: number): string => `${Math.ceil((100 / RATING_MAX_VALUE) * rating)}%`;

export {
  getOfferUrl,
  getRatingValue
};
