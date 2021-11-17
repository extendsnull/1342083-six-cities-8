import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Router as BrowserRouter, Route} from 'react-router-dom';
import {makeMockRootState} from '../../utils';
import PrivateRoute from './private-route';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: PrivateRouter', () => {
  beforeEach(() => {
    history.push('/private');
  });

  it('should render component for public route when user unauthorized', () => {
    const store = mockStore(makeMockRootState());

    render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Route exact path="/login">
            <h1>Public Route</h1>
          </Route>
          <PrivateRoute path="/private" exact>
            <h1>Private Route</h1>
          </PrivateRoute>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/Public Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private Route/i)).not.toBeInTheDocument();
  });

  it('should render component for private route when user authorized', () => {
    const store = mockStore(makeMockRootState(false, true));

    render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Route exact path="/login">
            <h1>Public Route</h1>
          </Route>
          <PrivateRoute path="/private" exact>
            <h1>Private Route</h1>
          </PrivateRoute>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public Route/i)).not.toBeInTheDocument();
  });
});
