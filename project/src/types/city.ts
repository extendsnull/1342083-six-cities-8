import {CityKey, CityName} from '../const';
import type MapLocation from './map-location';

type City = {
  [CityKey.Location]: MapLocation;
  [CityKey.Name]: CityName;
}

type Cities = {
  [key in CityName]?: MapLocation;
}

export type {
  City,
  Cities
};
