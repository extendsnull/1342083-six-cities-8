import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import {makeMockRootState, makeMockOffer} from '../../utils';
import ReviewForm from './review-form';

const mockState = makeMockRootState(true, true);
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore(mockState);
const offer = makeMockOffer();

describe('Component: ReviewForm', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <ReviewForm offer={offer} />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByLabelText(/Your review/i)).toBeInTheDocument();
    expect(screen.getByText(/To submit review please make sure to set/i)).toBeInTheDocument();
  });
});
