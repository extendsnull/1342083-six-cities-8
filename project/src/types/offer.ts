import {OfferType} from '../const';

type Offer = {
  id: number;
  isFavorite: boolean;
  isPremium: boolean;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: OfferType;
}

export default Offer;
