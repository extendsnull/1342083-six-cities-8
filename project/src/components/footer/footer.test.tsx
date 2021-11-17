import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';
import {Route, Router as BrowserRouter, Switch} from 'react-router-dom';
import {AppRoute} from '../../const';
import Footer from './footer';

const history = createMemoryHistory();

describe('Component: Footer', () => {
  it('should render correctly', () => {
    const {container} = render(
      <BrowserRouter history={history}>
        <Footer />
      </BrowserRouter>);

    expect(container.querySelector('.footer')).not.toBeNull();
  });

  it('should redirect to root url when user click to logo', () => {
    history.push(AppRoute.Favorites);

    render(
      <BrowserRouter history={history}>
        <Switch>
          <Route path={AppRoute.Main} exact></Route>
          <Route path={AppRoute.Favorites} exact>
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>);

    userEvent.click(screen.getByRole('link'));
    expect(history.location.pathname).toEqual(AppRoute.Main);
  });
});
