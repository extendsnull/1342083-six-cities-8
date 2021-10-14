import classNames, {Argument} from 'classnames';
import {nanoid} from 'nanoid';
import {generatePath} from 'react-router';
import {RANDOM_ID_LENGTH, RATING_MAX_VALUE, AppRoute} from './const';

const humanizeDate = (iso: string): string =>
  new Date(iso).toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });

const getClassNames = (...args: Argument[]): string => classNames(args);

const getOfferUrl = (id: number): string => generatePath(AppRoute.Offer, {id});

const getRandomId = (length: number = RANDOM_ID_LENGTH): string => nanoid();

const getRatingValue = (rating: number): string => `${Math.ceil((100 / RATING_MAX_VALUE) * rating)}%`;

export {
  humanizeDate,
  getClassNames,
  getOfferUrl,
  getRandomId,
  getRatingValue
};
