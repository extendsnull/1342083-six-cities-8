import OfferCard from '../offer-card/offer-card';
import {OfferCardType} from '../../const';
import type {Offer} from '../../types';

const MAX_NEAR_OFFERS_COUNT = 3;

type OfferNearbyProps = {
  offers: Offer[];
};

function OfferNearby(props: OfferNearbyProps): JSX.Element | null {
  const {offers} = props;

  if (offers.length) {
    const nearbyOffers = offers.slice(0, MAX_NEAR_OFFERS_COUNT);

    return (
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {nearbyOffers.map((offer) => (
              <OfferCard
                offer={offer}
                type={OfferCardType.Near}
                key={offer.id}
              />
            ))}
          </div>
        </section>
      </div>
    );
  }

  return null;
}

export default OfferNearby;
