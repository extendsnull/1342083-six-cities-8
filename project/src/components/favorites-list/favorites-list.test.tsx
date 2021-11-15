import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import {makeMockRootState} from '../../utils';
import FavoritesList from './favorites-list';

const mockState = makeMockRootState(true);
mockState.DATA.offers = mockState.DATA.offers.map((offer) => {
  offer.isFavorite = true;
  return offer;
});

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore(mockState);

describe('Component: FavoritesScreen', () => {
  it('should render correctly', () => {
    const state = store.getState();
    const {offers} = state.DATA;

    render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <FavoritesList offers={offers} />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/Paris/i)).toBeInTheDocument();

    for (const offer of offers) {
      expect(screen.getByText(new RegExp(offer.title, 'i'))).toBeInTheDocument();
    }
  });
});
