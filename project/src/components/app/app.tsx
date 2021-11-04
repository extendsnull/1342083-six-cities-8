import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import browserHistory from '../../browser-history';
import PrivateRoute from '../private-route/private-route';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {AppRoute} from '../../const';
import type {Comment} from '../../types';

type AppProps = {
  comments: Comment[];
}

function App(props: AppProps): JSX.Element {
  const {comments} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <MainScreen />
        </Route>
        <Route path={AppRoute.Login} exact>
          <LoginScreen />
        </Route>
        <PrivateRoute path={AppRoute.Favorites} exact>
          <FavoritesScreen />
        </PrivateRoute>
        <Route path={AppRoute.Offer} exact>
          <OfferScreen
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
