import type {Comment} from '../../types';
import {humanizeDate, getRatingValue} from '../../utils';

type CommentProps = {
  comment: Comment;
}

function Review(props: CommentProps): JSX.Element {
  const {comment} = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            width="54"
            height="54"
            alt="Reviews avatar"
            src={comment.user.avatarUrl}
          />
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRatingValue(comment.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={comment.date}>{humanizeDate(comment.date)}</time>
      </div>
    </li>
  );
}

export default Review;
