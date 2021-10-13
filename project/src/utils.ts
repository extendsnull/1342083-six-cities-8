import {generatePath} from 'react-router';
import {RATING_MAX_VALUE, AppRoute} from './const';

const getOfferUrl = (id: number): string => generatePath(AppRoute.Offer, {id});

const getRatingValue = (rating: number): string => `${Math.ceil((100 / RATING_MAX_VALUE) * rating)}%`;

export {
  getOfferUrl,
  getRatingValue
};
