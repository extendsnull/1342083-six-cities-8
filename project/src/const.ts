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

export {
  RATING_MAX_VALUE,
  AppRoute,
  AuthorizationStatus,
  OfferType
};
