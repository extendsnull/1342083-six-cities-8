import {MouseEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRoute, CityName} from '../../const';
import {setActiveCity} from '../../store/actions';
import {getActiveCity} from '../../store/selectors';
import {getClassNames} from '../../utils';

type LocationItemProps = {
  city: CityName;
};

function LocationItem(props: LocationItemProps): JSX.Element {
  const {city} = props;
  const activeCity = useSelector(getActiveCity);
  const dispatch = useDispatch();

  const handleItemClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(setActiveCity(city));
  };

  return (
    <li className="locations__item">
      <a
        className={getClassNames([
          'locations__item-link',
          'tabs__item',
          {'tabs__item--active': city === activeCity},
        ])}
        href={AppRoute.Main}
        onClick={handleItemClick}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

export default LocationItem;
