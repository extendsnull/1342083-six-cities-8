import {
  AuthInfoKey,
  CityKey,
  CommentKey,
  MapLocationKey,
  OfferKey,
  RawAuthInfoKey,
  RawCityKey,
  RawCommentKey,
  RawMapLocationKey,
  RawOfferKey,
  RawUserKey,
  UserKey
} from '../const';
import type {
  AuthInfo,
  City,
  Comment,
  MapLocation,
  Offer,
  RawAuthInfo,
  RawCity,
  RawComment,
  RawMapLocation,
  RawOffer,
  RawUser,
  User
} from '../types';

const adaptLocationToClient = (rawLocation: RawMapLocation): MapLocation => ({
  [MapLocationKey.Latitude]: rawLocation[RawMapLocationKey.Latitude],
  [MapLocationKey.Longitude]: rawLocation[RawMapLocationKey.Longitude],
  [MapLocationKey.Zoom]: rawLocation[RawMapLocationKey.Zoom],
});

const adaptCityToClient = (rawCity: RawCity): City => ({
  [CityKey.Location]: adaptLocationToClient(rawCity[RawCityKey.Location]),
  [CityKey.Name]: rawCity[RawCityKey.Name],
});

const adaptUserToClient = (rawUser: RawUser): User => ({
  [UserKey.AvatarUrl]: rawUser[RawUserKey.AvatarUrl],
  [UserKey.Id]: rawUser[RawUserKey.Id],
  [UserKey.IsPro]: rawUser[RawUserKey.IsPro],
  [UserKey.Name]: rawUser[RawUserKey.Name],
});

const adaptCommentToClient = (rawComment: RawComment): Comment => ({
  [CommentKey.Comment]: rawComment[RawCommentKey.Comment],
  [CommentKey.Date]: rawComment[RawCommentKey.Date],
  [CommentKey.Id]: rawComment[RawCommentKey.Id],
  [CommentKey.Rating]: rawComment[RawCommentKey.Rating],
  [CommentKey.User]: adaptUserToClient(rawComment[RawCommentKey.User]),
});

const adaptOfferToClient = (rawOffer: RawOffer): Offer => ({
  [OfferKey.City]: adaptCityToClient(rawOffer[RawOfferKey.City]),
  [OfferKey.Description]: rawOffer[RawOfferKey.Description],
  [OfferKey.Goods]: rawOffer[RawOfferKey.Goods],
  [OfferKey.Host]: adaptUserToClient(rawOffer[RawOfferKey.Host]),
  [OfferKey.Id]: rawOffer[RawOfferKey.Id],
  [OfferKey.Images]: rawOffer[RawOfferKey.Images],
  [OfferKey.IsFavorite]: rawOffer[RawOfferKey.IsFavorite],
  [OfferKey.IsPremium]: rawOffer[RawOfferKey.IsPremium],
  [OfferKey.Location]: adaptLocationToClient(rawOffer[RawOfferKey.Location]),
  [OfferKey.MaxAdults]: rawOffer[RawOfferKey.MaxAdults],
  [OfferKey.PreviewImage]: rawOffer[RawOfferKey.PreviewImage],
  [OfferKey.Price]: rawOffer[RawOfferKey.Price],
  [OfferKey.Rating]: rawOffer[RawOfferKey.Rating],
  [OfferKey.Title]: rawOffer[RawOfferKey.Title],
  [OfferKey.Type]: rawOffer[RawOfferKey.Type],
});

const adaptAuthToClient = (rawAuthInfo: RawAuthInfo): AuthInfo => ({
  [AuthInfoKey.AvatarUrl]: rawAuthInfo[RawAuthInfoKey.AvatarUrl],
  [AuthInfoKey.Email]: rawAuthInfo[RawAuthInfoKey.Email],
  [AuthInfoKey.Id]: rawAuthInfo[RawAuthInfoKey.Id],
  [AuthInfoKey.IsPro]: rawAuthInfo[RawAuthInfoKey.IsPro],
  [AuthInfoKey.Name]: rawAuthInfo[RawAuthInfoKey.Name],
  [AuthInfoKey.Token]: rawAuthInfo[RawAuthInfoKey.Token],
});

export {
  adaptCommentToClient,
  adaptOfferToClient,
  adaptAuthToClient
};
