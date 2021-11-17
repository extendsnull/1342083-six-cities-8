import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {makeMockRootState} from '../../utils';
import App from './app';

const mockStore = configureMockStore();
const mockStateWithoutAutorization = makeMockRootState();

const mockStateWithAutorization = makeMockRootState();
mockStateWithAutorization.USER.authorizationStatus = AuthorizationStatus.Auth;
mockStateWithAutorization.USER.isAuthorized = true;

const storeWithoutAuthorization = mockStore(mockStateWithoutAutorization);
const storeWithAuthorization = mockStore(mockStateWithAutorization);

const history = createMemoryHistory();

const fakeAppWithAuthorization = (
  <Provider store={storeWithAuthorization}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>
);

const fakeAppWithoutAuthorization = (
  <Provider store={storeWithoutAuthorization}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>
);

describe('App routing', () => {
  it('should render "MainScreen" when user navigate to "/"', () => {
    history.push(AppRoute.Main);
    render(fakeAppWithAuthorization);

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
  });

  it('should render "LoginScreen" when user navigate to "/login"', () => {
    history.push(AppRoute.Login);
    render(fakeAppWithoutAuthorization);

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it('should render "LoginScreen" when unauthorized user navigate to "/login"', () => {
    history.push(AppRoute.Favorites);
    render(fakeAppWithoutAuthorization);

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it('should render "FavoritesScreen" when authorized user navigate to "/favorites"', () => {
    history.push(AppRoute.Favorites);
    render(fakeAppWithAuthorization);

    expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to "/404"', () => {
    history.push(AppRoute.NotFound);
    render(fakeAppWithAuthorization);

    expect(screen.getByText(/404 Not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Back to main page/i)).toBeInTheDocument();
  });
});
