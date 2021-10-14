import {useState} from 'react';
import OfferCard from '../offer-card/offer-card';
import {OfferCardType} from '../../const';
import type {Offer} from '../../types';

type PlacesListProps = {
  offers: Offer[];
}

function PlacesList(props: PlacesListProps): JSX.Element {
  const {offers} = props;
  // eslint-disable-next-line
  const [activePlace, setActivePlace] = useState<Offer | null>(null);

  const handlePlaceCardMouseMove = (offer: Offer): void => setActivePlace(offer);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => (
        <OfferCard
          key={offer.id}
          type={OfferCardType.Cities}
          offer={offer}
          onMouseMove={handlePlaceCardMouseMove}
        />
      ))}
    </div>
  );
}

export default PlacesList;
