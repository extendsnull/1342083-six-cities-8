import {useEffect, useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import Header from '../header/header';
import Tabs from '../tabs/tabs';
import Spinner from '../spinner/spinner';
import OfferCard from '../offer-card/offer-card';
import Map from '../map/map';
import {OfferCardType} from '../../const';
import {getOffersByCity} from '../../utils';
import type {Offer, State} from '../../types';

const mapStateToProps = ({activeCity, offers}: State) => ({
  offers,
  activeCity,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainScreen(props: PropsFromRedux): JSX.Element {
  const {offers, activeCity} = props;
  const offersByCity = getOffersByCity(offers, activeCity);
  const hasOffers = Boolean(offersByCity.length);

  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);
  const [isLoaded, setLoading] = useState(true);

  useEffect(() => {
    if (offers.length) {
      setLoading(false);
    }
  }, [offers]);

  const handleMouseOver = (offer: Offer): void => {
    setActiveOffer(offer);
  };

  const getScreen = () => {
    if (isLoaded) {
      return (
        <main className="page__main page__main--spinner">
          <Spinner />
        </main>
      );
    }

    if (hasOffers) {
      return (
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersByCity.length} places to stay in {activeCity}</b>
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
                  {offersByCity.map((offer: Offer) => (
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
                    offers={offersByCity}
                    activeOffer={activeOffer}
                  />
                </section>
              </div>
            </div>
          </div>
        </main>
      );
    }

    return (
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
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
      </main>
    );
  };

  return (
    <div className="page page--gray page--main">
      <Header hasNav />
      <Tabs />
      {getScreen()}
    </div>
  );
}

export {MainScreen};
export default connector(MainScreen);
