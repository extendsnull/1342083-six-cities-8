import {render, screen} from '@testing-library/react';
import {SortType, sortTypeToLabel} from '../../const';
import SorterOption from './sorter-option';

describe('Component: SorterOption', () => {
  it('should render correctly', () => {
    const handleSortTypeChange = jest.fn();
    const sortType = SortType.Popular;

    render(
      <SorterOption
        sortType={sortType}
        activeSortType={SortType.PriceAscent}
        handleSortTypeChange={handleSortTypeChange}
      />);

    expect(screen.getByText(new RegExp(sortTypeToLabel[sortType], 'i'))).toBeInTheDocument();
  });

  it('should render correctly when option is active', () => {
    const handleSortTypeChange = jest.fn();
    const sortType = SortType.Popular;

    const {container} = render(
      <SorterOption
        sortType={sortType}
        activeSortType={sortType}
        handleSortTypeChange={handleSortTypeChange}
      />);

    expect(container.querySelector('.places__option--active')).not.toBeNull();
  });
});
