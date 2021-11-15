import {render, screen} from '@testing-library/react';
import {makeMockComment} from '../../utils';
import Review from './review';

const comment = makeMockComment();

describe('Component: Review', () => {
  it('should render correctly', () => {
    render(<Review comment={comment} />);
    expect(screen.getByText(new RegExp(comment.comment, 'i'))).toBeInTheDocument();
  });
});
