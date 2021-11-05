import {OfferKey, OfferType, RawOfferKey} from '../const';
import type {RawCity, City} from './city';
import type {RawMapLocation, MapLocation} from './map-location';
import type {RawUser, User} from './user';

type RawOffer = {
  [RawOfferKey.City]: RawCity;
  [RawOfferKey.Description]: string;
  [RawOfferKey.Goods]: string[];
  [RawOfferKey.Host]: RawUser;
  [RawOfferKey.Id]: number;
  [RawOfferKey.Images]: string[];
  [RawOfferKey.IsFavorite]: boolean;
  [RawOfferKey.IsPremium]: boolean;
  [RawOfferKey.Location]: RawMapLocation;
  [RawOfferKey.MaxAdults]: number;
  [RawOfferKey.PreviewImage]: string;
  [RawOfferKey.Price]: number;
  [RawOfferKey.Rating]: number;
  [RawOfferKey.Title]: string;
  [RawOfferKey.Type]: OfferType;
};

type Offer = {
  [OfferKey.City]: City;
  [OfferKey.Description]: string;
  [OfferKey.Goods]: string[];
  [OfferKey.Host]: User;
  [OfferKey.Id]: number;
  [OfferKey.Images]: string[];
  [OfferKey.IsFavorite]: boolean;
  [OfferKey.IsPremium]: boolean;
  [OfferKey.Location]: MapLocation;
  [OfferKey.MaxAdults]: number;
  [OfferKey.PreviewImage]: string;
  [OfferKey.Price]: number;
  [OfferKey.Rating]: number;
  [OfferKey.Title]: string;
  [OfferKey.Type]: OfferType;
}

export type {
  RawOffer,
  Offer
};
