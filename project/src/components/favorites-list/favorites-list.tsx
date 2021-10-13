import {Link} from 'react-router-dom';
import FavoriteOfferCard from '../favorite-offer-card/favorite-offer-card';
import {AppRoute} from '../../const';
import type {Offer} from '../../types';

type FavoriteListProps = {
  offers: Offer[]
}

type OfferGroups = {
  [name: string]: Offer[];
}

const groupFavoriteOffers = (offers: Offer[]): OfferGroups => offers
  .filter((offer: Offer) => offer.isFavorite)
  .reduce((acc: OfferGroups, offer: Offer) => {
    const {name} = offer.city;

    if (!acc[name]) {
      acc[name] = [];
    }

    acc[name].push(offer);
    return acc;
  }, {});

function FavoritesList(props: FavoriteListProps): JSX.Element {
  const offersByCities = groupFavoriteOffers(props.offers);

  return (
    <ul className="favorites__list">
      {Object.entries(offersByCities).map(([city, offers]) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Main}
              >
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {offers.map((offer) => (
              <FavoriteOfferCard
                key={offer.id}
                offer={offer}
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
