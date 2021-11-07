import type {
  AuthorizationInfo,
  City,
  Comment,
  MapLocation,
  Offer,
  RawAuthorizationInfo,
  RawCity,
  RawComment,
  RawMapLocation,
  RawOffer,
  RawUser,
  User
} from './types';

const adaptLocationToClient = (rawLocation: RawMapLocation): MapLocation => ({
  lat: rawLocation.latitude,
  lng: rawLocation.longitude,
  zoom: rawLocation.zoom,
});

const adaptCityToClient = (rawCity: RawCity): City => ({
  location: adaptLocationToClient(rawCity.location),
  name: rawCity.name,
});

const adaptUserToClient = (rawUser: RawUser): User => ({
  avatarUrl: rawUser.avatar_url,
  id: rawUser.id,
  isPro: rawUser.is_pro,
  name: rawUser.name,
});

const adaptCommentToClient = (rawComment: RawComment): Comment => ({
  comment: rawComment.comment,
  date: rawComment.date,
  id: rawComment.id,
  rating: rawComment.rating,
  user: adaptUserToClient(rawComment.user),
});

const adaptOfferToClient = (rawOffer: RawOffer): Offer => ({
  city: adaptCityToClient(rawOffer.city),
  description: rawOffer.description,
  goods: rawOffer.goods,
  host: adaptUserToClient(rawOffer.host),
  id: rawOffer.id,
  images: rawOffer.images,
  isFavorite: rawOffer.is_favorite,
  isPremium: rawOffer.is_premium,
  location: adaptLocationToClient(rawOffer.location),
  maxAdults: rawOffer.max_adults,
  previewImage: rawOffer.preview_image,
  price: rawOffer.price,
  rating: rawOffer.rating,
  title: rawOffer.title,
  type: rawOffer.type,
});

const adaptAuthToClient = (rawAuthorizationInfo: RawAuthorizationInfo): AuthorizationInfo => ({
  avatarUrl: rawAuthorizationInfo.avatar_url,
  email: rawAuthorizationInfo.email,
  id: rawAuthorizationInfo.id,
  isPro: rawAuthorizationInfo.is_pro,
  name: rawAuthorizationInfo.name,
  token: rawAuthorizationInfo.token,
});

export {
  adaptCommentToClient,
  adaptOfferToClient,
  adaptAuthToClient
};
