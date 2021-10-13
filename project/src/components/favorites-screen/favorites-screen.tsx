import FavoriteOfferCard from '../favorite-offer-card/favorite-offer-card';
import Logo from '../logo/logo';
import {AppRoute} from '../../const';
import type {Offer} from '../../types';

type FavoritesScreenProps = {
  offers: Offer[];
}

type OfferGroups = {
  [name: string]: Offer[];
}

const groupFavoriteOffers = (offers: Offer[]): OfferGroups => offers
  .filter((offer: Offer) => offer.isFavorite)
  .reduce((acc: OfferGroups, offer: Offer) => {
    const {name} = offer.city;

    if (!acc[name]) {
      acc[name] = [];
    }

    acc[name].push(offer);
    return acc;
  }, {});

function FavoritesScreen(props: FavoritesScreenProps): JSX.Element {
  const offersByCities = groupFavoriteOffers(props.offers);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href={AppRoute.Main}>
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(offersByCities).map(([city, offers]) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href={AppRoute.Main}>
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {offers.map((offer) => (
                      <FavoriteOfferCard
                        key={offer.id}
                        offer={offer}
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
