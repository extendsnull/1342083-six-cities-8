import {Icon, Marker} from 'leaflet';
import {useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import {MapIcon, MapIconSize} from '../../const';
import useMap from '../../hooks/use-map';
import {getActiveCity, getCities} from '../../store/selectors';
import type {Offer} from '../../types';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: Offer[];
  activeOffer: Offer | null;
}

const defaultIcon = new Icon({
  iconUrl: MapIcon.Default,
  iconSize: [MapIconSize.Width, MapIconSize.Height],
  iconAnchor: [MapIconSize.Width / 2, MapIconSize.Height],
});

const activeIcon = new Icon({
  iconUrl: MapIcon.Active,
  iconSize: [MapIconSize.Width, MapIconSize.Height],
  iconAnchor: [MapIconSize.Width / 2, MapIconSize.Height],
});

function Map(props: MapProps): JSX.Element {
  const {offers, activeOffer} = props;
  const cities = useSelector(getCities);
  const activeCity = useSelector(getActiveCity);
  const activeCityData = cities[activeCity];
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, activeCityData);

  useEffect(() => {
    if (map) {
      const markers = offers.map((offer) => {
        const isActive = activeOffer?.id === offer.id;

        const marker = new Marker({
          lat: offer.location.lat,
          lng: offer.location.lng,
        });

        marker.setIcon(isActive ? activeIcon : defaultIcon);
        marker.addTo(map);

        return marker;
      });

      return () => {
        markers.forEach((marker) => marker.remove());
      };
    }

  }, [map, offers, activeOffer]);

  return <div ref={mapRef}></div>;
}

export default Map;
