import {useState} from 'react';
import OfferCard from '../offer-card/offer-card';
import type {Offer} from '../../types';

type PlacesListProps = {
  offers: Offer[];
}

function PlacesList(props: PlacesListProps): JSX.Element {
  const {offers} = props;
  // eslint-disable-next-line
  const [activePlace, setActivePlace] = useState(offers[0].id);

  const handlePlaceCardMouseMove = (id: number): void => setActivePlace(id);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => (
        <OfferCard
          key={offer.id}
          className="cities__place-card"
          offer={offer}
          onMouseMove={handlePlaceCardMouseMove}
        />
      ))}
    </div>
  );
}

export default PlacesList;
