import {memo, useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SortType, sortTypeToLabel} from '../../const';
import {setSortType} from '../../store/actions';
import {getSortType} from '../../store/selectors';
import {getClassNames} from '../../utils';
import SorterOption from '../sorter-option/sorter-option';

function Sorter(): JSX.Element {
  const currentSortType = useSelector(getSortType);
  const [isActive, setIsActive] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleTogglerClick = () => {
    setIsActive((prevActive) => !prevActive);
  };

  const handleSortTypeChange = useCallback((sortType: SortType) => {
    if (sortType !== currentSortType) {
      dispatch(setSortType(sortType));
    }

    setIsActive(false);
  }, [dispatch, currentSortType]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span
        className={getClassNames(
          'places__sorting-type',
          {'places__sorting-type--active': isActive},
        )}
        tabIndex={0}
        onClick={handleTogglerClick}
      >
        {sortTypeToLabel[currentSortType]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={getClassNames(
        'places__options',
        'places__options--custom',
        {'places__options--opened': isActive},
      )}
      >
        {Object.values(SortType).map((sortType) => (
          <SorterOption
            sortType={sortType}
            activeSortType={currentSortType}
            key={sortType}
            handleSortTypeChange={handleSortTypeChange}
          />
        ))}
      </ul>
    </form>
  );
}

export default memo(Sorter);
