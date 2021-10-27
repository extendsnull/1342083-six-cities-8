import {MouseEvent} from 'react';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {setActiveCity} from '../../store/action';
import {AppRoute, CityName} from '../../const';
import type {Actions, State} from '../../types';
import {getClassNames} from '../../utils';

const mapStateToProps = ({activeCity}: State) => ({
  activeCity,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onSetActiveCity(city: CityName) {
    dispatch(setActiveCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Tabs(props: PropsFromRedux): JSX.Element {
  const {activeCity, onSetActiveCity} = props;

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
                onClick={(evt: MouseEvent<HTMLAnchorElement>) => {
                  evt.preventDefault();
                  onSetActiveCity(city);
                }}
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

export {Tabs};
export default connector(Tabs);
