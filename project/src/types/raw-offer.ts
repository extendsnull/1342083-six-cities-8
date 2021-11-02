import {
  OfferType,
  RawCityKey,
  RawMapLocationKey,
  RawOfferKey,
  RawUserKey
} from '../const';
import {CityName} from '../const';

type RawMapLocation = {
  [RawMapLocationKey.Latitude]: number;
  [RawMapLocationKey.Longitude]: number;
  [RawMapLocationKey.Zoom]: number;
}

type RawCity = {
  [RawCityKey.Location]: RawMapLocation;
  [RawCityKey.Name]: CityName;
}

type RawUser = {
  [RawUserKey.AvatarUrl]: string;
  [RawUserKey.Id]: number;
  [RawUserKey.IsPro]: boolean;
  [RawUserKey.Name]: string;
}

type RawOffer = {
  [RawOfferKey.City]: RawCity;
  [RawOfferKey.Description]: string;
  [RawOfferKey.Goods]: string[];
  [RawOfferKey.Host]: RawUser;
  [RawOfferKey.Id]: number;
  [RawOfferKey.Images]: string[];
  [RawOfferKey.IsFavorite]: boolean;
  [RawOfferKey.IsPremium]: boolean;
  [RawOfferKey.Location]: RawMapLocation;
  [RawOfferKey.MaxAdults]: number;
  [RawOfferKey.PreviewImage]: string;
  [RawOfferKey.Price]: number;
  [RawOfferKey.Rating]: number;
  [RawOfferKey.Title]: string;
  [RawOfferKey.Type]: OfferType;
};

export type {
  RawMapLocation,
  RawCity,
  RawUser,
  RawOffer
};
