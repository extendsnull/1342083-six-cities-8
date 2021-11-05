import {MapLocationKey, RawMapLocationKey} from '../const';

type RawMapLocation = {
  [RawMapLocationKey.Latitude]: number;
  [RawMapLocationKey.Longitude]: number;
  [RawMapLocationKey.Zoom]: number;
}

type MapLocation = {
  [MapLocationKey.Latitude]: number;
  [MapLocationKey.Longitude]: number;
  [MapLocationKey.Zoom]: number;
}

export type {
  RawMapLocation,
  MapLocation
};
