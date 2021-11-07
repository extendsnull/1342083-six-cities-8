import {useCallback, useEffect, useMemo, useState} from 'react';
import {useSelector} from 'react-redux';
import {OfferCardType} from '../../const';
import {getActiveCity, getOffersByCity, getSortType} from '../../store/selectors';
import type {Offer} from '../../types';
import {sortOffersByType} from '../../utils';
import Header from '../header/header';
import Map from '../map/map';
import OfferCard from '../offer-card/offer-card';
import Sorter from '../sorter/sorter';
import Spinner from '../spinner/spinner';
import Tabs from '../tabs/tabs';

function MainScreen(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);
  const [isLoaded, setLoading] = useState(true);
  const offers = useSelector(getOffersByCity);
  const sortType = useSelector(getSortType);
  const activeCity = useSelector(getActiveCity);
  const offersBySortType = useMemo(() => sortOffersByType(offers, sortType), [offers, sortType]);
  const hasOffers = Boolean(offers.length);

  useEffect(() => {
    if (hasOffers) {
      setLoading(false);
    }
  }, [hasOffers]);

  const onMouseOver = useCallback((offer: Offer): void => {
    setActiveOffer(offer);
  }, []);

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
                  {offersBySortType.map((offer: Offer) => (
                    <OfferCard
                      type={OfferCardType.Cities}
                      offer={offer}
                      key={offer.id}
                      onMouseOver={onMouseOver}
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
