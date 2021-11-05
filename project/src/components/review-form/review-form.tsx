import {useState, ChangeEvent, FormEvent, useRef} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {reviewFormSubmitAction} from '../../store/api-action';
import {CommentPostKey} from '../../const';
import Rating from '../rating/rating';
import type {CommentPost, Offer, ThunkAppDispatch} from '../../types';

const REVIEW_MIN_LENGTH = 50;

type ReviewFormProps = {
  offer: Offer;
};

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onReviewFormSubmit(id: number, comment: CommentPost) {
    dispatch(reviewFormSubmitAction(id, comment));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & ReviewFormProps;

function ReviewForm(props: ConnectedComponentProps): JSX.Element {
  const {offer, onReviewFormSubmit} = props;

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const formRef = useRef<HTMLFormElement | null>(null);

  const isDisabled = !rating || review.length < REVIEW_MIN_LENGTH;

  const resetForm = (): void => {
    setRating(0);
    setReview('');
  };

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>): void => setReview(evt.target.value);

  const onRatingChange = (value: number): void => setRating(value);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    const comment = {
      [CommentPostKey.Rating]: rating,
      [CommentPostKey.Comment]: review,
    };

    onReviewFormSubmit(offer.id, comment);
    resetForm();
  };

  return (
    <form
      className="reviews__form form"
      action="/"
      method="post"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <Rating
        currentRating={rating}
        isDisabled={isDisabled}
        onRatingChange={onRatingChange}
      />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleCommentChange}
        value={review}
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

export {ReviewForm};
export default connector(ReviewForm);
