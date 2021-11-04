import {CityKey, CityName, RawCityKey} from '../const';
import type {MapLocation, RawMapLocation} from './map-location';

type RawCity = {
  [RawCityKey.Location]: RawMapLocation;
  [RawCityKey.Name]: CityName;
}

type City = {
  [CityKey.Location]: MapLocation;
  [CityKey.Name]: CityName;
}

type Cities = {
  [key in CityName]?: MapLocation;
}

export type {
  RawCity,
  City,
  Cities
};
