import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {AppRoute, AuthorizationStatus} from '../../const';
import type {Offer, Comment} from '../../types';

type AppProps = {
  offers: Offer[];
  comments: Comment[];
}

function App(props: AppProps): JSX.Element {
  const {offers, comments} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <MainScreen offers={offers} />
        </Route>
        <Route path={AppRoute.Login} exact>
          <LoginScreen />
        </Route>
        <PrivateRoute
          authorizationStatus={AuthorizationStatus.Auth}
          path={AppRoute.Favorites}
          exact
        >
          <FavoritesScreen offers={offers} />
        </PrivateRoute>
        <Route path={AppRoute.Offer} exact>
          <OfferScreen
            offers={offers}
            comments={comments}
            onReviewFormSubmit={() => {
              throw new Error('Function \'onReviewFormSubmit\' isn\'t implemented.');
            }}
          />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
