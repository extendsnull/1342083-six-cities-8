import {OfferType} from '../const';
import type {Offer} from '../types';

const mockDescription = 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.';
const mockGoods = [
  'Wi-Fi',
  'Washing machine',
  'Towels',
  'Heating',
  'Coffee machine',
  'Baby seat',
  'Kitchen',
  'Dishwasher',
  'Cabel TV',
  'Fridge',
];

const mockHost = {
  avatarUrl: 'img/avatar-angelina.jpg',
  id: 3,
  isPro: true,
  name: 'Angelina',
};

const offers: Offer[] = [
  {
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: mockDescription,
    goods: [...mockGoods],
    host: {...mockHost},
    id: 0,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious apartment at great location',
    type: OfferType.Apartament,
  },
  {
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10,
      },
      name: 'Cologne',
    },
    description: mockDescription,
    goods: [...mockGoods],
    host: {...mockHost},
    id: 1,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    maxAdults: 4,
    previewImage: 'img/room.jpg',
    price: 80,
    rating: 4.1,
    title: 'Wood and stone place',
    type: OfferType.Private,
  },
  {
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: 'Brussels',
    },
    description: mockDescription,
    goods: [...mockGoods],
    host: {...mockHost},
    id: 2,
    images: [
      'img/room.jpg',
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    rating: 4.5,
    title: 'Canal View Prinsengracht',
    type: OfferType.Apartament,
  },
  {
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: mockDescription,
    goods: [...mockGoods],
    host: {...mockHost},
    id: 3,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-03.jpg',
    price: 180,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    type: OfferType.Apartament,
  },
  {
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: mockDescription,
    goods: [...mockGoods],
    host: {...mockHost},
    id: 4,
    images: [
      'img/room.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10,
    },
    maxAdults: 4,
    previewImage: 'img/room.jpg',
    price: 120,
    rating: 3.9,
    title: 'Wood and stone place',
    type: OfferType.Private,
  },
];

export default offers;
