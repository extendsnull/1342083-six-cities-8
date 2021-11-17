import {useSelector} from 'react-redux';
import FavoritesList from '../favorites-list/favorites-list';
import Footer from '../footer/footer';
import Header from '../header/header';
import {getOffers} from '../../store/selectors';

function FavoritesScreen(): JSX.Element {
  const offers = useSelector(getOffers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const hasOffers = Boolean(favoriteOffers.length);

  if (hasOffers) {
    return (
      <div className="page">
        <Header />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList offers={favoriteOffers} />
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
