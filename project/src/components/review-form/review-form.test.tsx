import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import {reviewFormSubmitAction} from '../../store/api-action';
import {makeMockRootState, makeMockOffer} from '../../utils';
import ReviewForm from './review-form';

jest.mock('../../store/api-action', () => ({
  __esModule: true,
  reviewFormSubmitAction: () => ({
    type: 'unknownType',
  }),
}));

const mockState = makeMockRootState(true, true);
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore(mockState);
const offer = makeMockOffer();

const comment = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est itaque quos nihil, similique iusto vel quam quia nemo illum aspernatur earum ad obcaecati amet sint beatae quod quibusdam nostrum tempore repudiandae fugiat eum id! Iste ducimus ipsa quae nesciunt animi a eligendi, fugit id quod distinctio qui expedita explicabo? Recusandae sunt totam dolorem in!';

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

  it ('should send button change status', () => {
    const {container} = render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <ReviewForm offer={offer} />
        </BrowserRouter>
      </Provider>);

    const ratingLabel = container.querySelector('label[for="5-stars"]') as HTMLLabelElement;
    const sendButton = container.querySelector('button[type="submit"]') as HTMLButtonElement;

    userEvent.click(ratingLabel);
    expect(sendButton.disabled).toBeTruthy();
    userEvent.type(screen.getByRole('textbox'), comment);
    expect(sendButton.disabled).toBeFalsy();
  });

  it('should send form data', () => {
    const {container} = render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <ReviewForm offer={offer} />
        </BrowserRouter>
      </Provider>);

    const ratingLabel = container.querySelector('label[for="5-stars"]') as HTMLLabelElement;
    const sendButton = container.querySelector('button[type="submit"]') as HTMLButtonElement;

    userEvent.click(ratingLabel);
    userEvent.type(screen.getByRole('textbox'), comment);
    userEvent.click(sendButton);
    expect(store.getActions()).toEqual([
      reviewFormSubmitAction(offer.id, {rating: 5, comment}),
    ]);
  });
});
