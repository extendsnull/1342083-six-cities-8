import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import browserHistory from '../../browser-history';
import PrivateRoute from '../private-route/private-route';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {AppRoute} from '../../const';

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
