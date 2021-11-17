import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import {AppRoute, CityName} from '../../const';
import {setActiveCity} from '../../store/actions';
import {makeMockRootState} from '../../utils';
import LoginScreen from './login-screen';

const mockState = makeMockRootState(true);
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore(mockState);

describe('Component: LoginScreen', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <LoginScreen />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it('should render LoginScreen when user navigate to /login', () => {
    history.push(AppRoute.Login);

    render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <LoginScreen />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    userEvent.type(screen.getByTestId('email'), 'keks@hemlacademy.ru');
    userEvent.type(screen.getByTestId('password'), '123456');
  });

  it('should set active city when user click to city button', () => {
    history.push(AppRoute.Login);

    render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <LoginScreen />
        </BrowserRouter>
      </Provider>,
    );

    const cityButton = screen.getByTestId('show-location');
    const cityName = cityButton.textContent as CityName;
    userEvent.click(cityButton);
    expect(store.getActions()).toEqual([
      setActiveCity(cityName),
    ]);
  });
});
