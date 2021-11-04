const LAYER_URL = 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png';
const RANDOM_ID_LENGTH = 6;
const RATING_MAX_VALUE = 5;
const AUTH_TOKEN_KEY_NAME = 'extendsnull-six-cities-token';

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
  SetAuthInfo = 'data/setAuthInfo',
  SetLoadState = 'app/setLoadState',
  RedirectToRoute = 'app/redirectToRoute',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

enum ApiRoute {
  Hotels = '/hotels',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

enum RawMapLocationKey {
  Latitude = 'latitude',
  Longitude = 'longitude',
  Zoom = 'zoom',
}

enum MapLocationKey {
  Latitude = 'lat',
  Longitude = 'lng',
  Zoom = 'zoom',
}

enum RawCityKey {
  Location = 'location',
  Name = 'name',
}

enum CityKey {
  Location = 'location',
  Name = 'name',
}

enum RawUserKey {
  AvatarUrl = 'avatar_url',
  Id = 'id',
  IsPro = 'is_pro',
  Name = 'name',
}

enum UserKey {
  AvatarUrl = 'avatarUrl',
  Id = 'id',
  IsPro = 'isPro',
  Name = 'name',
}

enum RawOfferKey {
  City = 'city',
  Description = 'description',
  Goods = 'goods',
  Host = 'host',
  Id = 'id',
  Images = 'images',
  IsFavorite = 'is_favorite',
  IsPremium = 'is_premium',
  Location = 'location',
  MaxAdults = 'max_adults',
  PreviewImage = 'preview_image',
  Price = 'price',
  Rating = 'rating',
  Title = 'title',
  Type = 'type',
}

enum OfferKey {
  City = 'city',
  Description = 'description',
  Goods = 'goods',
  Host = 'host',
  Id = 'id',
  Images = 'images',
  IsFavorite = 'isFavorite',
  IsPremium = 'isPremium',
  Location = 'location',
  MaxAdults = 'maxAdults',
  PreviewImage = 'previewImage',
  Price = 'price',
  Rating = 'rating',
  Title = 'title',
  Type = 'type',
}

enum RawAuthInfoKey {
  AvatarUrl = 'avatar_url',
  Email = 'email',
  Id = 'id',
  IsPro = 'is_pro',
  Name = 'name',
  Token = 'token',
}

enum AuthInfoKey {
  AvatarUrl = 'avatarUrl',
  Email = 'email',
  Id = 'id',
  IsPro = 'isPro',
  Name = 'name',
  Token = 'token',
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
  AUTH_TOKEN_KEY_NAME,
  AppRoute,
  AuthorizationStatus,
  OfferType,
  OfferCardType,
  MapIcon,
  MapIconSize,
  CityName,
  ActionType,
  ApiRoute,
  RawMapLocationKey,
  MapLocationKey,
  RawCityKey,
  CityKey,
  RawUserKey,
  UserKey,
  RawOfferKey,
  OfferKey,
  RawAuthInfoKey,
  AuthInfoKey,
  humanizedOfferTypeMap
};
