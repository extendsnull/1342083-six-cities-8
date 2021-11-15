import {render} from '@testing-library/react';
import {RatingTitle, ratingTitleToValue} from '../../const';
import RatingInput from './rating-input';

describe('Component: RatingInput', () => {
  it('should render correctly', () => {
    const onRatingChange = jest.fn();

    const {container} = render(
      <RatingInput
        value={ratingTitleToValue.badly}
        title={RatingTitle.Badly}
        isChecked={false}
        onRatingChange={onRatingChange}
      />);

    expect(container.querySelector('.form__rating-input')).not.toBeNull();
  });

  it('should render correctly when input checked', () => {
    const onRatingChange = jest.fn();

    const {container} = render(
      <RatingInput
        value={ratingTitleToValue.perfect}
        title={RatingTitle.Perfect}
        isChecked
        onRatingChange={onRatingChange}
      />);

    expect(container.querySelector('.form__rating-input:checked')).not.toBeNull();
  });
});
