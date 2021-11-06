import {useEffect, useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import Header from '../header/header';
import Tabs from '../tabs/tabs';
import Spinner from '../spinner/spinner';
import Sorter from '../sorter/sorter';
import OfferCard from '../offer-card/offer-card';
import Map from '../map/map';
import {OfferCardType} from '../../const';
import {getOffersByCity, sortOffersByType} from '../../utils';
import type {Offer, State} from '../../types';

const mapStateToProps = ({activeCity, offers, sortType}: State) => ({
  offers,
  activeCity,
  sortType,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainScreen(props: PropsFromRedux): JSX.Element {
  const {offers, activeCity, sortType} = props;
  const offersByCity = getOffersByCity(offers, activeCity);
  const sortedOffers = sortOffersByType(offersByCity, sortType);
  const hasOffers = Boolean(sortedOffers.length);

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
                <b className="places__found">{sortedOffers.length} places to stay in {activeCity}</b>
                <Sorter />
                <div className="cities__places-list places__list tabs__content">
                  {sortedOffers.map((offer: Offer) => (
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
                    offers={sortedOffers}
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
