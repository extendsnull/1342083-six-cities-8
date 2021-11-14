import {render, screen} from '@testing-library/react';
import {makeMockComment} from '../../utils';
import ReviewsList from './reviews-list';

const comments = [makeMockComment(), makeMockComment(), makeMockComment()];

describe('Component: Review', () => {
  it('should render correctly', () => {
    render(<ReviewsList comments={comments} />);

    for (const comment of comments) {
      expect(screen.getByText(new RegExp(comment.comment, 'i'))).toBeInTheDocument();
    }
  });
});
