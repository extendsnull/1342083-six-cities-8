import {OfferType} from '../const';

export type OfferPreview = {
  id: number;
  isFavorite: boolean;
  isPremium: boolean;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: OfferType;
}

export type OffersPreviews = OfferPreview[];
