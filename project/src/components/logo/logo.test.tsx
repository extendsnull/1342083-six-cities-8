import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Route, Router as BrowserRouter, Switch} from 'react-router-dom';
import {AppRoute} from '../../const';
import Logo from './logo';

const history = createMemoryHistory();

describe('Component: Logo', () => {
  it('should render correctly on main screen', () => {
    history.push(AppRoute.Main);

    render(
      <BrowserRouter history={history}>
        <Switch>
          <Route path={AppRoute.Main} exact>
            <Logo />
          </Route>
        </Switch>
      </BrowserRouter>);

    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
  });
  it('should render correctly on other screen', () => {
    history.push(AppRoute.Login);

    render(
      <BrowserRouter history={history}>
        <Switch>
          <Route path={AppRoute.Login} exact>
            <Logo />
          </Route>
        </Switch>
      </BrowserRouter>);

    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
