import OfferCard from '../offer-card/offer-card';
import {OfferCardType} from '../../const';
import type {Offer} from '../../types';

type PlacesListProps = {
  offers: Offer[];
  onActiveOfferSelect: (offer: Offer) => void;
}

function PlacesList(props: PlacesListProps): JSX.Element {
  const {offers, onActiveOfferSelect} = props;

  const handleMouseOver = (offer: Offer): void => {
    onActiveOfferSelect(offer);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => (
        <OfferCard
          key={offer.id}
          type={OfferCardType.Cities}
          offer={offer}
          onMouseOver={handleMouseOver}
        />
      ))}
    </div>
  );
}

export default PlacesList;
