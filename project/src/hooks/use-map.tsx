import {MutableRefObject, useEffect, useState} from 'react';
import {Map, TileLayer} from 'leaflet';
import type {MapLocation} from '../types';
import {LAYER_URL} from '../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: MapLocation | undefined,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (city) {
      const {lat, lng, zoom} = city;

      if (mapRef.current !== null && map === null) {
        const instance = new Map(mapRef.current, {
          center: {lat, lng},
          zoom,
        });

        const layer = new TileLayer(LAYER_URL);
        instance.addLayer(layer);
        setMap(instance);
      }

      if (map) {
        map.setView({lat, lng}, zoom);
      }
    }


  }, [mapRef, map, city]);

  return map;
}

export default useMap;
