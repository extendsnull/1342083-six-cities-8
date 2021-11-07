import {useSelector} from 'react-redux';
import FavoritesList from '../favorites-list/favorites-list';
import Footer from '../footer/footer';
import Header from '../header/header';
import {getOffers} from '../../store/selectors';

function FavoritesScreen(): JSX.Element {
  const offers = useSelector(getOffers);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
