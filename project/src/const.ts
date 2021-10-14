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

const humanizedOfferTypeMap = new Map([
  [OfferType.Apartament, 'Apartment'],
  [OfferType.Private, 'Private Room'],
  [OfferType.House, 'House'],
  [OfferType.Hotel, 'Hotel'],
]);

export {
  RANDOM_ID_LENGTH,
  RATING_MAX_VALUE,
  humanizedOfferTypeMap,
  AppRoute,
  AuthorizationStatus,
  OfferType,
  OfferCardType
};
