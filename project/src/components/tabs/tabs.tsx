import {memo, MouseEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRoute, CityName} from '../../const';
import {setActiveCity} from '../../store/actions';
import {getActiveCity} from '../../store/selectors';
import {getClassNames} from '../../utils';

function Tabs(): JSX.Element {
  const activeCity = useSelector(getActiveCity);
  const dispatch = useDispatch();

  const handleLocationClick = (city: CityName) => (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(setActiveCity(city));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(CityName).map((city) => (
            <li className="locations__item" key={city}>
              <a
                className={getClassNames([
                  'locations__item-link',
                  'tabs__item',
                  {'tabs__item--active': city === activeCity},
                ])}
                href={AppRoute.Main}
                onClick={handleLocationClick(city)}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default memo(Tabs);
