import {useEffect, useRef} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/use-map';
import {MapIcon, MapIconSize} from '../../const';
import {Offer, State} from '../../types';
import 'leaflet/dist/leaflet.css';
import { connect, ConnectedProps } from 'react-redux';

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

const mapStateToProps = ({activeCity, cities}: State) => ({
  activeCity,
  cities,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MapProps;

function Map(props: ConnectedComponentProps): JSX.Element {
  const {offers, activeOffer, activeCity, cities} = props;
  const activeCityData = cities[activeCity];

  const mapRef = useRef(null);
  const map = useMap(mapRef, activeCityData);

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

export {Map};
export default connector(Map);
