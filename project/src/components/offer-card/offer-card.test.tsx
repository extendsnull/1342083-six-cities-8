import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import {OfferCardType} from '../../const';
import {makeMockOffer, makeMockRootState} from '../../utils';
import OfferCard from './offer-card';

const mockState = makeMockRootState(true);
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore(mockState);
const offer = makeMockOffer();

describe('Component: OfferCard', () => {
  it('should render card correctly', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <OfferCard type={OfferCardType.Cities} offer={offer} />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(new RegExp(offer.title, 'i'))).toBeInTheDocument();
  });

  it('should render city card correctly', async () => {
    const {container} = render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <OfferCard type={OfferCardType.Cities} offer={offer} />
        </BrowserRouter>
      </Provider>);

    expect(container.querySelector('.cities__place-card')).not.toBeNull();
  });

  it('should render favorite card correctly', async () => {
    const {container} = render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <OfferCard type={OfferCardType.Favorites} offer={offer} />
        </BrowserRouter>
      </Provider>);

    expect(container.querySelector('.favorites__card')).not.toBeNull();
  });

  it('should render near card correctly', async () => {
    const {container} = render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <OfferCard type={OfferCardType.Near} offer={offer} />
        </BrowserRouter>
      </Provider>);

    expect(container.querySelector('.near-places__card')).not.toBeNull();
  });
});
