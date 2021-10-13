import Header from '../header/header';
import Footer from '../footer/footer';
import FavoritesList from '../favorites-list/favorites-list';
import type {Offer} from '../../types';

type FavoritesScreenProps = {
  offers: Offer[];
}

function FavoritesScreen(props: FavoritesScreenProps): JSX.Element {
  return (
    <div className="page">
      <Header isAuthorized />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={props.offers} />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default FavoritesScreen;
