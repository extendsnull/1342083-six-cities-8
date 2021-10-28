import {MutableRefObject, useEffect, useState} from 'react';
import {Map, TileLayer} from 'leaflet';
import {City} from '../types';
import {LAYER_URL} from '../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.lat,
          lng: city.location.lng,
        },
        zoom: city.location.zoom,
      });

      const layer = new TileLayer(LAYER_URL);
      instance.addLayer(layer);

      setMap(instance);
    }

  }, [mapRef, map, city]);

  return map;
}

export default useMap;
