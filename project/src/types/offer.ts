import type {OfferType} from '../const';

type Offer = {
  city: {
    name: string,
  };
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
