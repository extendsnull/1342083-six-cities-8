import {OfferKey, OfferType} from '../const';
import type {City} from './city';
import type User from './user';
import type MapLocation from './map-location';

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

export default Offer;
