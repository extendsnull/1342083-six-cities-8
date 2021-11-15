import {render} from '@testing-library/react';
import Rating from './rating';

describe('Component: Rating', () => {
  it('should render correctly', () => {
    const onRatingChange = jest.fn();

    const {container} = render(
      <Rating
        currentRating={5}
        onRatingChange={onRatingChange}
      />);

    expect(container.querySelectorAll('.form__rating-input').length).toBe(5);
    expect(container.querySelectorAll('.form__rating-input:checked').length).toBe(1);
  });
});
