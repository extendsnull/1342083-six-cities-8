import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import {makeMockOffer, makeMockRootState} from '../../utils';
import Map from './map';

const mockState = makeMockRootState(true);
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore(mockState);

describe('Component: Map', () => {
  const offers = [makeMockOffer(), makeMockOffer(), makeMockOffer()];
  const [activeOffer] = offers;

  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Map offers={offers} activeOffer={activeOffer} />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByTestId('map')).toBeInTheDocument();
    expect(container.querySelector('.leaflet-container')).toBeInTheDocument();
  });
});
