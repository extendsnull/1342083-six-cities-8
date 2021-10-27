import {useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import OfferCard from '../offer-card/offer-card';
import Map from '../map/map';
import {OfferCardType} from '../../const';
import type {Offer, State} from '../../types';

const mapStateToProps = ({activeCity, offers}: State) => ({
  activeCity,
  offers,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Cities(props: PropsFromRedux): JSX.Element {
  const {activeCity, offers} = props;
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);
  const activeCityOffers = offers.filter((offer: Offer) => offer.city.name === activeCity);

  const handleMouseOver = (offer: Offer): void => {
    setActiveOffer(offer);
  };

  if (activeCityOffers.length) {
    return (
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{activeCityOffers.length} places to stay in {activeCity}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by&nbsp;</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              {activeCityOffers.map((offer: Offer) => (
                <OfferCard
                  key={offer.id}
                  type={OfferCardType.Cities}
                  offer={offer}
                  onMouseOver={handleMouseOver}
                />
              ))}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map
                offers={activeCityOffers}
                activeOffer={activeOffer}
              />
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cities">
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in {activeCity}</p>
          </div>
        </section>
        <div className="cities__right-section"></div>
      </div>
    </div>
  );
}

export {Cities};
export default connector(Cities);
