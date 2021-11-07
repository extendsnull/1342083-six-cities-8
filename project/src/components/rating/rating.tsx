import {ratingTitleToValue} from '../../const';
import RatingInput from '../rating-input/rating-input';

type RatingProps = {
  currentRating: number;
  isDisabled: boolean;
  onRatingChange: (value: number) => void;
};

function Rating(props: RatingProps): JSX.Element {
  const {currentRating: rating, isDisabled, onRatingChange} = props;

  return (
    <div className="reviews__rating-form form__rating">
      {Object.entries(ratingTitleToValue).map(([title, value]) => {
        const isChecked = rating === value;

        return (
          <RatingInput
            value={value}
            title={title}
            isChecked={isChecked}
            isDisabled={isDisabled}
            key={title}
            onRatingChange={onRatingChange}
          />
        );
      })}
    </div>
  );
}

export default Rating;
