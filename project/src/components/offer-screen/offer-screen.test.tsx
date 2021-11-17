import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import type {Offer} from '../../types';
import {makeMockRootState} from '../../utils';
import OfferScreen from './offer-screen';

jest.mock('../../store/api-action', () => ({
  __esModule: true,
  fetchOfferAction: () => ({
    type: 'unknownType',
  }),
}));

const mockState = makeMockRootState(true);
const mockOffer = mockState.DATA.offer as Offer;

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore(mockState);

describe('Component: OfferScreen', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <OfferScreen />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(new RegExp(mockOffer.title, 'i'))).toBeInTheDocument();
  });
});
