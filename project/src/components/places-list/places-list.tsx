import PlaceCard from '../place-card/place-card';
import type {Offer} from '../../types';

type PlacesListProps = {
  offers: Offer[];
}

function PlacesList(props: PlacesListProps): JSX.Element {
  const {offers} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard key={offer.id} className="cities__place-card" offer={offer} />)}
    </div>
  );
}

export default PlacesList;
