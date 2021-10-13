import {OfferType} from '../const';
import type {Offer} from '../types';

const offers: Offer[] = [
  {
    city: {
      name: 'Paris',
    },
    id: 0,
    isFavorite: true,
    isPremium: true,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious apartment at great location',
    type: OfferType.Apartament,
  },
  {
    city: {
      name: 'Cologne',
    },
    id: 1,
    isFavorite: true,
    isPremium: false,
    previewImage: 'img/room.jpg',
    price: 80,
    rating: 4.1,
    title: 'Wood and stone place',
    type: OfferType.Private,
  },
  {
    city: {
      name: 'Brussels',
    },
    id: 2,
    isFavorite: false,
    isPremium: false,
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    rating: 4.5,
    title: 'Canal View Prinsengracht',
    type: OfferType.Apartament,
  },
  {
    city: {
      name: 'Paris',
    },
    id: 3,
    isFavorite: true,
    isPremium: false,
    previewImage: 'img/apartment-03.jpg',
    price: 180,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    type: OfferType.Apartament,
  },
  {
    city: {
      name: 'Paris',
    },
    id: 4,
    isFavorite: false,
    isPremium: false,
    previewImage: 'img/room.jpg',
    price: 120,
    rating: 3.9,
    title: 'Wood and stone place',
    type: OfferType.Private,
  },
];

export default offers;
