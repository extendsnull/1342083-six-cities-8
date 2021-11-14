import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import {makeMockRootState} from '../../utils';
import Header from './header';

const mockState = makeMockRootState(true);
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore(mockState);

describe('Component: Header', () => {
  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Header />
        </BrowserRouter>
      </Provider>);

    expect(container.querySelector('.header')).not.toBeNull();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

  it('should render correctly without navigation', () => {
    const {container} = render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Header hasNav={false} />
        </BrowserRouter>
      </Provider>);

    expect(container.querySelector('.header__nav')).toBeNull();
  });

  it('should render correctly when user is authorized', () => {
    const storeWithAuthorization =  mockStore(makeMockRootState(true, true));

    render(
      <Provider store={storeWithAuthorization}>
        <BrowserRouter history={history}>
          <Header />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });
});
