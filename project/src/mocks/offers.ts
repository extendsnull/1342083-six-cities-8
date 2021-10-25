import {OfferType} from '../const';
import type {MapLocation, Offer, User} from '../types';

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

const mockCity = {
  location: {
    lat: 52.37295592416151,
    lng: 4.899730094382143,
    zoom: 10,
  } as MapLocation,
  name: 'Amsterdam',
};

const mockHost: User = {
  avatarUrl: 'img/avatar-angelina.jpg',
  id: 3,
  isPro: true,
  name: 'Angelina',
};

const offers: Offer[] = [
  {
    city: {...mockCity},
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
      lat: 52.3909553943508,
      lng: 4.85309666406198,
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
        lat: 52.3909553943508,
        lng: 4.929309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
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
      lat: 52.369553943508,
      lng: 4.85309666406198,
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
    city: {...mockCity},
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
      lat: 52.3909553943508,
      lng: 4.929309666406198,
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
        lat: 52.3909553943508,
        lng: 4.929309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
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
      lat: 52.3809553943508,
      lng: 4.939309666406198,
      zoom: 10,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-03.jpg',
    price: 180,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    type: OfferType.Apartament,
  },
];

export default offers;
