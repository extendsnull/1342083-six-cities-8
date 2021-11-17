import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import {makeMockRootState} from '../../utils';
import MainScreen from './main-screen';

const mockState = makeMockRootState(true);
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore(mockState);

describe('Component: MainScreen', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <MainScreen />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
  });
});
