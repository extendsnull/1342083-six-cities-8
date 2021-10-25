import {useEffect, useRef} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/use-map';
import {MapLocation, Offer} from '../../types';
import {MapIcon, MapIconSize} from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: MapLocation;
  offers: Offer[];
  activeOffer: Offer | undefined;
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
  const {city, offers, activeOffer} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      for (const offer of offers) {
        const isActive = activeOffer?.id === offer.id;

        const marker = new Marker({
          lat: offer.location.lat,
          lng: offer.location.lng,
        });

        marker.setIcon(isActive ? activeIcon : defaultIcon);
        marker.addTo(map);
      }
    }

  }, [map, offers, activeOffer]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
