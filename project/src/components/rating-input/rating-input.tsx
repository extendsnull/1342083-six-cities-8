import {MouseEvent} from 'react';

type RatingInputProps = {
  value: number;
  title: string;
  isChecked: boolean;
  isDisabled: boolean;
  onRatingChange: (value: number) => void;
};

function RatingInput(props: RatingInputProps): JSX.Element {
  const {value, title, isChecked, isDisabled, onRatingChange} = props;
  const id = `${value}-stars`;

  const handleRatingLabelClick = (evt: MouseEvent<HTMLLabelElement>) => onRatingChange(value);

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        id={id}
        name="rating"
        type="radio"
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        required
      />
      <label
        className="reviews__rating-label form__rating-label"
        htmlFor={id}
        title={title}
        onClick={handleRatingLabelClick}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default RatingInput;