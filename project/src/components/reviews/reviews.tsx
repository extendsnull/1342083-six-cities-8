import ReviewsList from '../reviews-list/reviews-list';
import ReviewForm from '../review-form/review-form';
import type {Comment, Offer} from '../../types';

type ReviewsProps = {
  comments: Comment[];
  isAuthorized: boolean;
  offer: Offer;
};

function Reviews(props: ReviewsProps): JSX.Element {
  const {comments, isAuthorized, offer} = props;
  const hasComments = Boolean(comments.length);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{comments.length}</span>
      </h2>
      {hasComments && <ReviewsList comments={comments} />}
      {isAuthorized && <ReviewForm offer={offer} />}
    </section>
  );
}

export default Reviews;
