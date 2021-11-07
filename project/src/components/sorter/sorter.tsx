import {useState} from 'react';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {setSortType} from '../../store/action';
import {getClassNames} from '../../utils';
import {SortType, sortTypeToLabel} from '../../const';
import type {Actions, State} from '../../store/types';

const mapStateToProps = ({DATA}: State) => ({
  sortType: DATA.sortType,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onSortTypeChange(sortType: SortType) {
    dispatch(setSortType(sortType));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Sorter(props: PropsFromRedux): JSX.Element {
  const {sortType: currentSortType, onSortTypeChange} = props;
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleTogglerClick = () => {
    setIsActive((prevActive) => !prevActive);
  };

  const handleSortTypeChange = (sortType: SortType) => () => {
    onSortTypeChange(sortType);
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
            onClick={handleSortTypeChange(sortType)}
            key={key}
          >
            {sortTypeToLabel[sortType]}
          </li>
        ))}
      </ul>
    </form>
  );
}

export {Sorter};
export default connector(Sorter);
