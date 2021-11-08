import {memo} from 'react';
import {CityName} from '../../const';
import LocationItem from '../location-item/location-item';

function Tabs(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(CityName).map((city) => (
            <LocationItem city={city} key={city} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default memo(Tabs);
