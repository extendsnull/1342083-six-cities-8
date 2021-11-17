import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Route, Router as BrowserRouter, Switch} from 'react-router-dom';
import {AppRoute, CityName} from '../../const';
import {setActiveCity} from '../../store/actions';
import {makeMockOffer, makeMockRootState} from '../../utils';
import FavoritesGroup from './favorites-group';

const mockState = makeMockRootState(true, true);
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore(mockState);

const offers = [makeMockOffer(), makeMockOffer()];
offers.forEach((offer) => {
  offer.city.name = CityName.Amsterdam;
  offer.isFavorite = true;
});

describe('Component: FavoritesScreen', () => {
  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <FavoritesGroup city={CityName.Amsterdam} offers={offers} />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
    expect(container.querySelectorAll('.place-card').length).toEqual(2);
  });

  it('should redirect and set active city when user click on city button', () => {
    history.push(AppRoute.Favorites);

    render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Switch>
            <Route path={AppRoute.Main} exact>
              <h1>Amsterdam</h1>
            </Route>
            <Route path={AppRoute.Favorites} exact>
              <FavoritesGroup city={CityName.Amsterdam} offers={offers} />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>);

    userEvent.click(screen.getByText(/Amsterdam/i));
    expect(history.location.pathname).toEqual(AppRoute.Main);
    expect(store.getActions()).toEqual([
      setActiveCity(CityName.Amsterdam),
    ]);
  });
});
