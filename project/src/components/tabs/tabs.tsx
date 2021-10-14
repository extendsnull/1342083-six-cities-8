import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {getClassNames} from '../../utils';

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const ACTIVE_CITY = 'Amsterdam';

function Tabs(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li className="locations__item" key={city}>
              <Link
                className={getClassNames([
                  'locations__item-link',
                  'tabs__item',
                  {'tabs__item--active': city === ACTIVE_CITY},
                ])}
                to={AppRoute.Main}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
