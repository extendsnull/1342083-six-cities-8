import {CityName} from '../../const';
import type {Offer} from '../../types';
import FavoritesGroup from '../favorites-group/favorites-group';

type FavoriteListProps = {
  offers: Offer[]
}

type OfferGroups = {
  [name: string]: Offer[];
}

const groupFavoriteOffers = (offers: Offer[]): OfferGroups => offers
  .reduce((acc: OfferGroups, offer: Offer) => {
    const {name} = offer.city;

    if (offer.isFavorite && !acc[name]) {
      acc[name] = [];
    }

    if (offer.isFavorite) {
      acc[name].push(offer);
    }

    return acc;
  }, {});

function FavoritesList(props: FavoriteListProps): JSX.Element {
  const offersByCities = groupFavoriteOffers(props.offers);

  return (
    <ul className="favorites__list">
      {Object.entries(offersByCities).map(([city, offers]) => (
        <FavoritesGroup
          city={city as CityName}
          offers={offers}
          key={city}
        />
      ))}
    </ul>
  );
}

export default FavoritesList;
