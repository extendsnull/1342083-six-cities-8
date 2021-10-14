import type {Comment} from '../types';

const mockComment: Comment = {
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: '2019-05-08T14:13:56.569Z',
  id: 0,
  rating: 4,
  user: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 4,
    isPro: false,
    name: 'Max',
  },
};

const comments: Comment[] = [mockComment];

export default comments;
