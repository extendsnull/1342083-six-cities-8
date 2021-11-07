import {memo} from 'react';
import {ratingTitleToValue} from '../../const';
import RatingInput from '../rating-input/rating-input';

type RatingProps = {
  currentRating: number;
  onRatingChange: (value: number) => void;
};

function Rating(props: RatingProps): JSX.Element {
  const {currentRating: rating, onRatingChange} = props;

  return (
    <div className="reviews__rating-form form__rating">
      {Object.entries(ratingTitleToValue).map(([title, value]) => {
        const isChecked = rating === value;

        return (
          <RatingInput
            value={value}
            title={title}
            isChecked={isChecked}
            key={title}
            onRatingChange={onRatingChange}
          />
        );
      })}
    </div>
  );
}

export default memo(Rating);
