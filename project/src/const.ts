const RANDOM_ID_LENGTH = 6;
const RATING_MAX_VALUE = 5;

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum OfferType {
  Apartament = 'Apartment',
  Private = 'Private room',
}

enum OfferCardType {
  Cities = 'cities',
  Favorites = 'favorites',
  Near = 'near-places',
}

export {
  RANDOM_ID_LENGTH,
  RATING_MAX_VALUE,
  AppRoute,
  AuthorizationStatus,
  OfferType,
  OfferCardType
};
