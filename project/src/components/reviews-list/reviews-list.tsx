import type {Comment} from '../../types';
import Review from '../review/review';

type ReviewsListProps = {
  comments: Comment[];
};

function ReviewsList(props: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {props.comments.map((comment) => (
        <Review comment={comment} key={comment.id} />
      ))}
    </ul>
  );
}

export default ReviewsList;
