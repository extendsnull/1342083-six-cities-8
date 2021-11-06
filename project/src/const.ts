const LAYER_URL = 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png';
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
  Room = 'room',
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
  SetOffer = 'data/setOffer',
  SetNearbyOffers = 'data/setNearbyOffers',
  SetComments = 'data/setComments',
  SetOffers = 'data/setOffers',
  SetCities = 'data/setCities',
  SetActiveCity = 'data/setActiveCity',
  SetAuthInfo = 'data/setAuthInfo',
  RedirectToRoute = 'app/redirectToRoute',
  RequireAuthorization = 'user/requireAuthorization',
  SetAuthorization = 'user/setAuthorization',
  RequireLogout = 'user/requireLogout',
}

enum ApiRoute {
  Hotels = '/hotels',
  Hotels$Id = '/hotels/:id',
  Hotels$IdNearby = '/hotels/:id/nearby',
  Favorite = '/favorite',
  Comments = '/comments',
  Comments$Id = '/comments/:id',
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

enum RawCommentKey {
  Comment = 'comment',
  Date = 'date',
  Id = 'id',
  Rating = 'rating',
  User = 'user',
}

enum CommentKey {
  Comment = 'comment',
  Date = 'date',
  Id = 'id',
  Rating = 'rating',
  User = 'user',
}

enum CommentPostKey {
  Comment = 'comment',
  Rating = 'rating',
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

enum RatingTitle {
  Perfect = 'perfect',
  Good = 'good',
  NotBad = 'not bad',
  Badly = 'badly',
  Terribly = 'terribly',
}

enum SortType {
  Popular = 'popular',
  PriceAscent = 'price-ascent',
  PriceDescent = 'price-descent',
  RatingDescent = 'rating-descent',
}

const ratingTitleToValue = {
  [RatingTitle.Perfect]: 5,
  [RatingTitle.Good]: 4,
  [RatingTitle.NotBad]: 3,
  [RatingTitle.Badly]: 2,
  [RatingTitle.Terribly]: 1,
};

const humanizedOfferToType = {
  [OfferType.Apartament]: 'Apartment',
  [OfferType.Room]: 'Private Room',
  [OfferType.House]: 'House',
  [OfferType.Hotel]: 'Hotel',
};

const sortTypeToLabel = {
  [SortType.Popular]: 'Popular',
  [SortType.PriceAscent]: 'Price: low to high',
  [SortType.PriceDescent]: 'Price: high to low',
  [SortType.RatingDescent]: 'Top rated first',
};

export {
  LAYER_URL,
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
  RawCommentKey,
  CommentKey,
  CommentPostKey,
  RawAuthInfoKey,
  AuthInfoKey,
  RatingTitle,
  SortType,
  ratingTitleToValue,
  humanizedOfferToType,
  sortTypeToLabel
};
