import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import {makeMockRootState, makeMockOffer, makeMockComment} from '../../utils';
import Reviews from './reviews';

const mockState = makeMockRootState(true, true);
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore(mockState);

const comments = [makeMockComment(), makeMockComment()];
const offer = makeMockOffer();

describe('Component: Reviews', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Reviews
            comments={comments}
            offer={offer}
            isAuthorized
          />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/Reviews ·/i)).toBeInTheDocument();
  });
});
