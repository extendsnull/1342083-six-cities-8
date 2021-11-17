import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute, CityName, OfferCardType} from '../../const';
import {setActiveCity} from '../../store/actions';
import type {Offer} from '../../types';
import OfferCard from '../offer-card/offer-card';

type FavoritesGroupProps = {
  city: CityName;
  offers: Offer[];
};

function FavoritesGroup(props: FavoritesGroupProps): JSX.Element {
  const {city, offers} = props;
  const dispatch = useDispatch();

  const handleCityClick = () => {
    dispatch(setActiveCity(city));
  };

  return (
    <li className="favorites__locations-items" key={city}>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to={AppRoute.Main}
            onClick={handleCityClick}
          >
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <OfferCard
            type={OfferCardType.Favorites}
            offer={offer}
            key={offer.id}
          />
        ))}
      </div>
    </li>
  );
}

export default FavoritesGroup;
