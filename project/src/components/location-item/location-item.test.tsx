import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import {CityName} from '../../const';
import {makeMockRootState} from '../../utils';
import LocationItem from './location-item';

const mockState = makeMockRootState(true);
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore(mockState);

describe('Component: LocationItem', () => {
  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <LocationItem city={CityName.Amsterdam} />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(container.querySelector('.tabs__item.tabs__item--active')).toBeNull();
  });

  it('should render correctly when item is active', () => {
    const {container} = render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <LocationItem city={CityName.Paris} />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(container.querySelector('.tabs__item.tabs__item--active')).not.toBeNull();
  });
});
