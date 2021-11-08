import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import Header from '../header/header';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">404 Not Found</h1>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">Not found</b>
                <p className="cities__status-description">
                  <Link className="cities__not-found-link" to={AppRoute.Main}>
                    Back to main page
                  </Link>
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

export default NotFoundScreen;
