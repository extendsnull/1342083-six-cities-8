import classNames from 'classnames';
import {Link} from 'react-router-dom';

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
          {CITIES.map((city) => {
            const linkClassNames: string = classNames({
              'locations__item-link': true,
              'tabs__item': true,
              'tabs__item--active': city === ACTIVE_CITY,
            });

            return (
              <li className="locations__item" key={city}>
                <Link
                  className={linkClassNames}
                  to="/"
                >
                  <span>{city}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
