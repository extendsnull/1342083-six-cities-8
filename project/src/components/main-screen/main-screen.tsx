import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {OfferCardType} from '../../const';
import {getActiveCity, getFilteredAndSortedOffers} from '../../store/selectors';
import Tabs from '../tabs/tabs';
import type {Offer} from '../../types';
import Header from '../header/header';
import Map from '../map/map';
import OfferCard from '../offer-card/offer-card';
import Sorter from '../sorter/sorter';
import Spinner from '../spinner/spinner';

function MainScreen(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);
  const [isLoaded, setLoading] = useState(true);
  const offers = useSelector(getFilteredAndSortedOffers);
  const activeCity = useSelector(getActiveCity);
  const hasOffers = Boolean(offers.length);

  useEffect(() => {
    if (hasOffers) {
      setLoading(false);
    }
  }, [hasOffers]);

  const handleMouseOver = (offer: Offer): void => {
    setActiveOffer(offer);
  };

  if (isLoaded) {
    return (
      <div className="page page--gray page--main">
        <Header />
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
        <Header />
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
                      type={OfferCardType.Cities}
                      offer={offer}
                      key={offer.id}
                      onMouseOver={handleMouseOver}
                    />
                  ))}
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={offers} activeOffer={activeOffer}/>
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
      <Header />
      <Tabs />
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">
                  We could not find any property available at the moment in {activeCity}
                </p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
