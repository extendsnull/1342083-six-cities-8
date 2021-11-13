import {address, datatype, lorem, image, name, random, date, internet} from 'faker';
import {CityName, OfferType} from '../const';
import type {AuthorizationInfo, Cities, City, Comment, MapLocation, Offer, User} from '../types';

const mockAuthorizationInfo = (): AuthorizationInfo => ({
  avatarUrl: image.avatar(),
  email: internet.email(),
  id: datatype.number(),
  isPro: datatype.boolean(),
  name: name.findName(),
  token: lorem.word(),
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

const makeMockCity = (): City => ({
  location: makeMockMapLocation(),
  name: CityName.Amsterdam,
});

const makeMockMapLocation = (): MapLocation => ({
  lat: parseFloat(address.latitude()),
  lng: parseFloat(address.longitude()),
  zoom: datatype.number(15),
});

const makeMockUser = (): User => ({
  avatarUrl: image.avatar(),
  id: datatype.number(),
  isPro: datatype.boolean(),
  name: name.findName(),
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

export {
  mockAuthorizationInfo,
  makeMockComment,
  makeMockCities,
  makeMockOffer
};
