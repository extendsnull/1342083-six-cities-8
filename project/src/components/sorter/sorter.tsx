import {useState} from 'react';
import {getClassNames} from '../../utils';
import {SortType, sortTypeToLabel} from '../../const';

function Sorter(): JSX.Element {
  const [currentSortType, setCurrentSortType] = useState<SortType>(SortType.Popular);
  const [active, setActive] = useState(false);

  const handleSortingTypeClick = () => {
    setActive((prevActive) => !prevActive);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span
        className={getClassNames(
          'places__sorting-type',
          {'places__sorting-type--active': active},
        )}
        tabIndex={0}
        onClick={handleSortingTypeClick}
      >
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={getClassNames(
        'places__options',
        'places__options--custom',
        {'places__options--opened': active},
      )}
      >
        {Object.entries(SortType).map(([key, sortType]) => (
          <li
            className={getClassNames(
              'places__option',
              {'places__option--active': currentSortType === sortType},
            )}
            tabIndex={0}
            onClick={() => setCurrentSortType(sortType)}
            key={key}
          >
            {sortTypeToLabel[sortType]}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorter;
