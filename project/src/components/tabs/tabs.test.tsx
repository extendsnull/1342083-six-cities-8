import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import {makeMockRootState} from '../../utils';
import Tabs from './tabs';

const mockState = makeMockRootState(true);
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore(mockState);

describe('Component: Tabs', () => {
  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Tabs />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
    expect(container.querySelector('.tabs')).not.toBeNull();
    expect(container.querySelector('.tabs__item.tabs__item--active')).not.toBeNull();
  });
});
