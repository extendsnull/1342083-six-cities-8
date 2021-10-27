import {OfferType} from '../const';
import City from './city';
import type User from './user';
import type MapLocation from './map-location';

type Offer = {
  city: City;
  description: string;
  goods: string[];
  host: User;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: MapLocation;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: OfferType;
}

export default Offer;
