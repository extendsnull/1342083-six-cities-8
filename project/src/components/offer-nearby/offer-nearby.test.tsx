import {configureMockStore} from '@jedmao/redux-mock-store';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import {makeMockOffer, makeMockRootState} from '../../utils';
import OfferNearby from './offer-nearby';

const mockState = makeMockRootState(true);
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore(mockState);
const offers = [makeMockOffer(), makeMockOffer(), makeMockOffer()];

describe('Component: OfferNearby', () => {
  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <OfferNearby offers={offers} />
        </BrowserRouter>
      </Provider>);

    expect(container.querySelectorAll('.near-places__card').length).toBe(3);
  });
});
