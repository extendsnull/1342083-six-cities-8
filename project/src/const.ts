const AUTH_TOKEN_KEY_NAME = 'extendsnull-six-cities-token';
const LAYER_URL = 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png';
const RATING_MAX_VALUE = 5;

enum ApiRoute {
  Hotels = '/hotels',
  Hotels$Id = '/hotels/:id',
  Hotels$IdNearby = '/hotels/:id/nearby',
  Favorite = '/favorite',
  Favorite$Id$Status = '/favorite/:id/:status',
  Comments = '/comments',
  Comments$Id = '/comments/:id',
  Login = '/login',
  Logout = '/logout',
}

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '/404',
}

enum AuthorizationInfoKey{
  AvatarUrl = 'avatarUrl',
  Email = 'email',
  Id = 'id',
  IsPro = 'isPro',
  Name = 'name',
  Token = 'token',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum CityKey {
  Location = 'location',
  Name = 'name',
}

enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
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

enum MapIcon {
  Default = 'img/pin.svg',
  Active = 'img/pin-active.svg',
}

enum MapIconSize {
  Width = 27,
  Height = 39,
}

enum MapLocationKey {
  Latitude = 'lat',
  Longitude = 'lng',
  Zoom = 'zoom',
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

enum RatingTitle {
  Perfect = 'perfect',
  Good = 'good',
  NotBad = 'not bad',
  Badly = 'badly',
  Terribly = 'terribly',
}

enum RawAuthorizationInfoKey{
  AvatarUrl = 'avatar_url',
  Email = 'email',
  Id = 'id',
  IsPro = 'is_pro',
  Name = 'name',
  Token = 'token',
}

enum RawCityKey {
  Location = 'location',
  Name = 'name',
}

enum RawCommentKey {
  Comment = 'comment',
  Date = 'date',
  Id = 'id',
  Rating = 'rating',
  User = 'user',
}

enum RawMapLocationKey {
  Latitude = 'latitude',
  Longitude = 'longitude',
  Zoom = 'zoom',
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

enum RawUserKey {
  AvatarUrl = 'avatar_url',
  Id = 'id',
  IsPro = 'is_pro',
  Name = 'name',
}

enum SortType {
  Popular = 'popular',
  PriceAscent = 'price-ascent',
  PriceDescent = 'price-descent',
  RatingDescent = 'rating-descent',
}

enum ToastMessage {
  DefaultError = 'Something wrong, please try again later',
  NearbyOffersError = 'Failed to load nearby offers, please try again later',
  CommentsError = 'Failed to load comments, please try again later',
  LoginError = 'The email address or password is incorrect',
  SignIn = 'Please sign in',
}

enum UserKey {
  AvatarUrl = 'avatarUrl',
  Id = 'id',
  IsPro = 'isPro',
  Name = 'name',
}

const offerTypeToReadable = {
  [OfferType.Apartament]: 'Apartment',
  [OfferType.Room]: 'Private Room',
  [OfferType.House]: 'House',
  [OfferType.Hotel]: 'Hotel',
};

const ratingTitleToValue = {
  [RatingTitle.Perfect]: 5,
  [RatingTitle.Good]: 4,
  [RatingTitle.NotBad]: 3,
  [RatingTitle.Badly]: 2,
  [RatingTitle.Terribly]: 1,
};

const sortTypeToLabel = {
  [SortType.Popular]: 'Popular',
  [SortType.PriceAscent]: 'Price: low to high',
  [SortType.PriceDescent]: 'Price: high to low',
  [SortType.RatingDescent]: 'Top rated first',
};

export {
  AUTH_TOKEN_KEY_NAME,
  LAYER_URL,
  RATING_MAX_VALUE,
  ApiRoute,
  AppRoute,
  AuthorizationInfoKey,
  AuthorizationStatus,
  CityKey,
  CityName,
  CommentKey,
  CommentPostKey,
  MapIcon,
  MapIconSize,
  MapLocationKey,
  OfferType,
  OfferCardType,
  OfferKey,
  RatingTitle,
  RawAuthorizationInfoKey,
  RawCityKey,
  RawCommentKey,
  RawMapLocationKey,
  RawOfferKey,
  RawUserKey,
  SortType,
  ToastMessage,
  UserKey,
  offerTypeToReadable,
  ratingTitleToValue,
  sortTypeToLabel
};
