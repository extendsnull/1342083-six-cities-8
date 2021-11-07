import {useEffect, useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {OfferCardType} from '../../const';
import type {State} from '../../store/types';
import {getActiveCity, getOffersBySortType} from '../../store/selectors';
import type {Offer} from '../../types';
import Header from '../header/header';
import Tabs from '../tabs/tabs';
import Spinner from '../spinner/spinner';
import Sorter from '../sorter/sorter';
import OfferCard from '../offer-card/offer-card';
import Map from '../map/map';

const mapStateToProps = (state: State) => ({
  offers: getOffersBySortType(state),
  activeCity: getActiveCity(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainScreen(props: PropsFromRedux): JSX.Element {
  const {offers, activeCity} = props;
  const hasOffers = Boolean(offers.length);

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

  if (isLoaded) {
    return (
      <div className="page page--gray page--main">
        <Header hasNav />
        <Tabs />
        <main className="page__main page__main--spinner">
          <Spinner />
        </main>
      </div>
    );
  }

  if (hasOffers) {
    return (
      <div className="page page--gray page--main">
        <Header hasNav />
        <Tabs />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {activeCity}</b>
                <Sorter />
                <div className="cities__places-list places__list tabs__content">
                  {offers.map((offer: Offer) => (
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
                    offers={offers}
                    activeOffer={activeOffer}
                  />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header hasNav />
      <Tabs />
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
    </div>
  );
}

export {MainScreen};
export default connector(MainScreen);
