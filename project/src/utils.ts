import classNames, {Argument} from 'classnames';
import {generatePath} from 'react-router';
import {
  RATING_MAX_VALUE,
  AppRoute,
  CityName,
  SortType
} from './const';
import type {Cities, Offer} from './types';

const humanizeDate = (iso: string): string =>
  new Date(iso).toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });

const getClassNames = (...args: Argument[]): string => classNames(args);

const getOfferUrl = (id: number): string => generatePath(AppRoute.Offer, {id});

const getRatingValue = (rating: number): string => `${Math.ceil((100 / RATING_MAX_VALUE) * rating)}%`;

const getCities = (offers: Offer[]): Cities => {
  const cities = offers.reduce<Cities>((acc, offer: Offer) => {
    const {name, location} = offer.city;

    if (!acc[name]) {
      acc[name] = location;
    }

    return acc;
  }, {});

  return cities;
};

const sortOffersByType = (offers: Offer[], sortType: SortType): Offer[] => {
  switch (sortType) {
    case SortType.PriceAscent: {
      return offers.slice().sort((firstOffer, secondOffer) => firstOffer.price - secondOffer.price);
    }

    case SortType.PriceDescent: {
      return offers.slice().sort((firstOffer, secondOffer) => secondOffer.price - firstOffer.price);
    }

    case SortType.RatingDescent: {
      return offers.slice().sort((firstOffer, secondOffer) => secondOffer.rating - firstOffer.rating);
    }
  }

  return offers;
};

const getOffersByCity = (
  offers: Offer[],
  activeCity: CityName,
): Offer[] => offers.filter((offer) => offer.city.name === activeCity);

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
  getRatingValue,
  getCities,
  sortOffersByType,
  getOffersByCity,
  replaceIdParam,
  scrollTop
};
