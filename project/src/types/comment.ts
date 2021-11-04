import {CommentKey, RawCommentKey} from '../const';
import type {RawUser, User} from './user';

type RawComment = {
  [RawCommentKey.Comment]: string;
  [RawCommentKey.Date]: string;
  [RawCommentKey.Id]: number;
  [RawCommentKey.Rating]: number;
  [RawCommentKey.User]: RawUser;
};

type Comment = {
  [CommentKey.Comment]: string;
  [CommentKey.Date]: string;
  [CommentKey.Id]: number;
  [CommentKey.Rating]: number;
  [CommentKey.User]: User;
};

export type {
  RawComment,
  Comment
};
