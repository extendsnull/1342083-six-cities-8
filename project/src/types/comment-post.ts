import {CommentPostKey} from '../const';

type CommentPost = {
  [CommentPostKey.Comment]: string;
  [CommentPostKey.Rating]: number;
};

export type {
  CommentPost
};
