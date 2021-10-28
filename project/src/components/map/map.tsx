import {useEffect, useRef} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/use-map';
import {MapIcon, MapIconSize} from '../../const';
import {Offer} from '../../types';
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
  const city = offers[0].city;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const isActive = activeOffer?.id === offer.id;

        const marker = new Marker({
          lat: offer.location.lat,
          lng: offer.location.lng,
        });

        marker.setIcon(isActive ? activeIcon : defaultIcon);
        marker.addTo(map);
      });
    }

  }, [map, offers, activeOffer]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
