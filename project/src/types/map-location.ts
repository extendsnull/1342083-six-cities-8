import {MapLocationKey} from '../const';

type MapLocation = {
  [MapLocationKey.Latitude]: number;
  [MapLocationKey.Longitude]: number;
  [MapLocationKey.Zoom]: number;
}

export default MapLocation;
