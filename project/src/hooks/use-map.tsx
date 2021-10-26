import {MutableRefObject, useEffect, useState} from 'react';
import {Map, TileLayer} from 'leaflet';
import {MapLocation} from '../types';
import {LAYER_URL} from '../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: MapLocation,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoom,
      });

      const layer = new TileLayer(LAYER_URL);
      instance.addLayer(layer);

      setMap(instance);
    }

  }, [mapRef, map, city]);

  return map;
}

export default useMap;
