import {memo} from 'react';
import {SortType, sortTypeToLabel} from '../../const';
import {getClassNames} from '../../utils';

type SorterOptionProps = {
  sortType: SortType;
  activeSortType: SortType;
  handleSortTypeChange: (sortType: SortType) => void;
};

function SorterOption(props: SorterOptionProps): JSX.Element {
  const {sortType, activeSortType, handleSortTypeChange} = props;

  const handleClick = () => {
    handleSortTypeChange(sortType);
  };

  return (
    <li
      className={getClassNames(
        'places__option',
        {'places__option--active': activeSortType === sortType},
      )}
      tabIndex={0}
      onClick={handleClick}
    >
      {sortTypeToLabel[sortType]}
    </li>
  );
}

export default memo(SorterOption);
