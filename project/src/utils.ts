import classNames, {Argument} from 'classnames';
import {nanoid} from '@reduxjs/toolkit';
import {generatePath} from 'react-router';
import {
  RANDOM_ID_LENGTH,
  RATING_MAX_VALUE,
  AppRoute,
  OfferKey,
  CityKey,
  CityName
} from './const';
import type {Cities, Offer} from './types';

const humanizeDate = (iso: string): string =>
  new Date(iso).toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });

const getClassNames = (...args: Argument[]): string => classNames(args);

const getOfferUrl = (id: number): string => generatePath(AppRoute.Offer, {id});

const getRandomId = (length: number = RANDOM_ID_LENGTH): string => nanoid();

const getRatingValue = (rating: number): string => `${Math.ceil((100 / RATING_MAX_VALUE) * rating)}%`;

const getCities = (offers: Offer[]): Cities => {
  const cities = offers.reduce<Cities>((acc, offer: Offer) => {
    const {name, location} = offer[OfferKey.City];

    if (!acc[name]) {
      acc[name] = location;
    }

    return acc;
  }, {});

  return cities;
};

const getOffersByCity = (
  offers: Offer[],
  activeCity: CityName,
): Offer[] => offers.filter((offer) => offer[OfferKey.City][CityKey.Name] === activeCity);

const replaceIdParam = (url: string, id: number): string => url.replace(':id', String(id));

const scrollTop = (): void => {
  if (window.scrollY > 0) {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
};

export {
  humanizeDate,
  getClassNames,
  getOfferUrl,
  getRandomId,
  getRatingValue,
  getCities,
  getOffersByCity,
  replaceIdParam,
  scrollTop
};
