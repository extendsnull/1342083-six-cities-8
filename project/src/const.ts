const LAYER_URL = 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png';
const RANDOM_ID_LENGTH = 6;
const RATING_MAX_VALUE = 5;

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '/404',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum OfferType {
  Apartament = 'apartment',
  Private = 'private',
  House = 'house',
  Hotel = 'hotel',
}

enum OfferCardType {
  Cities = 'cities',
  Favorites = 'favorites',
  Near = 'near-places',
}

enum MapIcon {
  Default = 'img/pin.svg',
  Active = 'img/pin-active.svg',
}

enum MapIconSize {
  Width = 27,
  Height = 39,
}

enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

enum ActionType {
  SetActiveCity = 'data/setActiveCity',
  SetCities = 'data/setCities',
  SetOffers = 'data/setOffers',
}

const humanizedOfferTypeMap = {
  [OfferType.Apartament]: 'Apartment',
  [OfferType.Private]: 'Private Room',
  [OfferType.House]: 'House',
  [OfferType.Hotel]: 'Hotel',
};

export {
  LAYER_URL,
  RANDOM_ID_LENGTH,
  RATING_MAX_VALUE,
  AppRoute,
  AuthorizationStatus,
  OfferType,
  OfferCardType,
  MapIcon,
  MapIconSize,
  CityName,
  ActionType,
  humanizedOfferTypeMap
};
