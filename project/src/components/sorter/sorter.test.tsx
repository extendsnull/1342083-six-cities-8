import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import {makeMockRootState} from '../../utils';
import Sorter from './sorter';

const mockState = makeMockRootState(true);
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore(mockState);

describe('Component: Sorter', () => {
  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Sorter />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
    expect(container.querySelector('.places__option--active')).not.toBeNull();
  });
});
