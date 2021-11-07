import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SortType, sortTypeToLabel} from '../../const';
import {setSortType} from '../../store/actions';
import {getSortType} from '../../store/selectors';
import {getClassNames} from '../../utils';

function Sorter(): JSX.Element {
  const currentSortType = useSelector(getSortType);
  const [isActive, setIsActive] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleTogglerClick = () => {
    setIsActive((prevActive) => !prevActive);
  };

  const handleSortTypeChange = (sortType: SortType) => () => {
    dispatch(setSortType(sortType));
    setIsActive(false);
  };

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
        {Object.entries(SortType).map(([key, sortType]) => (
          <li
            className={getClassNames(
              'places__option',
              {'places__option--active': currentSortType === sortType},
            )}
            tabIndex={0}
            key={key}
            onClick={handleSortTypeChange(sortType)}
          >
            {sortTypeToLabel[sortType]}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorter;
