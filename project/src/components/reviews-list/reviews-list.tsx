import Review from '../review/review';
import type {Comment} from '../../types/comment';

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
