import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import browserHistory from '../../browser-history';
import {AppRoute} from '../../const';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import LoginScreen from '../login-screen/login-screen';
import MainScreen from '../main-screen/main-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import OfferScreen from '../offer-screen/offer-screen';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
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
          <OfferScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
