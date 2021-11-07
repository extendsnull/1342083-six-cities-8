import {connect, ConnectedProps} from 'react-redux';
import Header from '../header/header';
import Footer from '../footer/footer';
import FavoritesList from '../favorites-list/favorites-list';
import {State} from '../../store/types';
import {getOffers} from '../../store/selectors';

const mapStateToProps = (state: State) => ({
  offers: getOffers(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function FavoritesScreen(props: PropsFromRedux): JSX.Element {
  const {offers} = props;

  return (
    <div className="page">
      <Header hasNav />

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

export {FavoritesList};
export default connector(FavoritesScreen);
