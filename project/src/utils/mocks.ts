import {address, datatype, lorem, image, name, random, date, internet} from 'faker';
import {AuthorizationStatus, CityName, OfferType, SortType} from '../const';
import type {RootState} from '../store/root-reducer';
import type {AppData, UserProcess} from '../store/types';
import type {
  AuthorizationInfo,
  Cities,
  City,
  Comment,
  MapLocation,
  Offer,
  RawAuthorizationInfo,
  RawCity,
  RawComment,
  RawMapLocation,
  RawOffer,
  RawUser,
  User
} from '../types';

const makeMockRawAuthorizationInfo = (): RawAuthorizationInfo => ({
  'avatar_url': image.avatar(),
  email: internet.email(),
  id: datatype.number(),
  'is_pro': datatype.boolean(),
  name: name.findName(),
  token: lorem.word(),
});

const makeMockAuthorizationInfo = (): AuthorizationInfo => ({
  avatarUrl: image.avatar(),
  email: internet.email(),
  id: datatype.number(),
  isPro: datatype.boolean(),
  name: name.findName(),
  token: lorem.word(),
});

const makeMockRawComment = (): RawComment => ({
  comment:lorem.sentence(),
  date: date.past().toString(),
  id: datatype.number(),
  rating: datatype.float(5),
  user: makeMockRawUser(),
});

const makeMockComment = (): Comment => ({
  comment:lorem.sentence(),
  date: date.past().toString(),
  id: datatype.number(),
  rating: datatype.float(5),
  user: makeMockUser(),
});

const makeMockCities = (): Cities => ({
  [CityName.Amsterdam]: makeMockMapLocation(),
  [CityName.Brussels]: makeMockMapLocation(),
});

const makeMockRawCity = (): RawCity => ({
  location: makeMockRawMapLocation(),
  name: CityName.Amsterdam,
});

const makeMockCity = (): City => ({
  location: makeMockMapLocation(),
  name: CityName.Amsterdam,
});

const makeMockRawMapLocation = (): RawMapLocation => ({
  latitude: parseFloat(address.latitude()),
  longitude: parseFloat(address.longitude()),
  zoom: datatype.number(15),
});

const makeMockMapLocation = (): MapLocation => ({
  lat: parseFloat(address.latitude()),
  lng: parseFloat(address.longitude()),
  zoom: datatype.number(15),
});

const makeMockRawUser = (): RawUser => ({
  'avatar_url': image.avatar(),
  id: datatype.number(),
  'is_pro': datatype.boolean(),
  name: name.findName(),
});

const makeMockUser = (): User => ({
  avatarUrl: image.avatar(),
  id: datatype.number(),
  isPro: datatype.boolean(),
  name: name.findName(),
});

const makeMockRawOffer = (): RawOffer => ({
  city: makeMockRawCity(),
  description: lorem.sentence(),
  goods: random.arrayElements(),
  host: makeMockRawUser(),
  id: datatype.number(),
  images: random.arrayElements(),
  'is_favorite': datatype.boolean(),
  'is_premium': datatype.boolean(),
  location: makeMockRawMapLocation(),
  'max_adults': datatype.number(),
  'preview_image': image.city(),
  price: datatype.number(),
  rating: datatype.float(5),
  title: lorem.sentence(),
  type: OfferType.Apartament,
});

const makeMockOffer = (): Offer => ({
  city: makeMockCity(),
  description: lorem.sentence(),
  goods: random.arrayElements(),
  host: makeMockUser(),
  id: datatype.number(),
  images: random.arrayElements(),
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  location: makeMockMapLocation(),
  maxAdults: datatype.number(),
  previewImage: image.city(),
  price: datatype.number(),
  rating: datatype.float(5),
  title: lorem.sentence(),
  type: OfferType.Apartament,
});

const makeMockAppDataState = (): AppData => ({
  offer: null,
  offers: [],
  cities: {},
  nearbyOffers: [],
  comments: [],
  activeCity: CityName.Paris,
  sortType: SortType.Popular,
});

const makeMockUserProcessState = (): UserProcess => ({
  authorizationStatus: AuthorizationStatus.Unknown,
  isAuthorized: false,
  authorizationInfo: null,
});

const makeMockRootState = (): RootState => ({
  DATA: makeMockAppDataState(),
  USER: makeMockUserProcessState(),
});

export {
  makeMockRawAuthorizationInfo,
  makeMockAuthorizationInfo,
  makeMockRawComment,
  makeMockComment,
  makeMockCities,
  makeMockRawOffer,
  makeMockOffer,
  makeMockAppDataState,
  makeMockUserProcessState,
  makeMockRootState
};
