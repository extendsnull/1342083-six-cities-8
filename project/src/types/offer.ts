import {OfferType} from '../const';
import type User from './user';
import type Location from './location';

type Offer = {
  city: {
    location: Location,
    name: string,
  };
  description: string,
  goods: string[],
  host: User,
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location,
  maxAdults: number,
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: OfferType;
}

export default Offer;
