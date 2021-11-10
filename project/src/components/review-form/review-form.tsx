import {useState, ChangeEvent, FormEvent, useRef, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {CommentPostKey} from '../../const';
import type {Offer} from '../../types';
import {reviewFormSubmitAction} from '../../store/api-action';
import Rating from '../rating/rating';

const REVIEW_MIN_LENGTH = 50;

type ReviewFormProps = {
  offer: Offer;
};

function ReviewForm(props: ReviewFormProps): JSX.Element {
  const {offer} = props;
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const formRef = useRef<HTMLFormElement | null>(null);
  const isDisabled = !rating || review.length < REVIEW_MIN_LENGTH;
  const dispatch = useDispatch();

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>): void => setReview(evt.target.value);

  const handleRatingChange = useCallback((value: number): void => setRating(value), []);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    const comment = {
      [CommentPostKey.Rating]: rating,
      [CommentPostKey.Comment]: review,
    };

    dispatch(reviewFormSubmitAction(offer.id, comment));
    setRating(0);
    setReview('');
  };

  return (
    <form
      className="reviews__form form"
      action="/"
      method="post"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <Rating
        currentRating={rating}
        onRatingChange={handleRatingChange}
      />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={handleCommentChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
