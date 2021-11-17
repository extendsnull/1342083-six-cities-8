import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import {SortType, sortTypeToLabel} from '../../const';
import { setSortType } from '../../store/actions';
import {makeMockRootState} from '../../utils';
import SorterOption from './sorter-option';

const mockState = makeMockRootState(true);
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore(mockState);

const sortType = SortType.Popular;
const handleSortTypeChange = () => {
  store.dispatch(setSortType(sortType));
};

describe('Component: SorterOption', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <SorterOption
            sortType={sortType}
            activeSortType={sortType}
            handleSortTypeChange={handleSortTypeChange}
          />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(new RegExp(sortTypeToLabel[sortType], 'i'))).toBeInTheDocument();
  });

  it('should render correctly when option is active', () => {
    const {container} = render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <SorterOption
            sortType={sortType}
            activeSortType={sortType}
            handleSortTypeChange={handleSortTypeChange}
          />
        </BrowserRouter>
      </Provider>);

    expect(container.querySelector('.places__option--active')).not.toBeNull();
  });

  it('should set sort type when user click to option', () => {
    render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <SorterOption
            sortType={sortType}
            activeSortType={sortType}
            handleSortTypeChange={handleSortTypeChange}
          />
        </BrowserRouter>
      </Provider>);

    userEvent.click(screen.getByText(new RegExp(sortTypeToLabel[sortType], 'i')));
    expect(store.getActions()).toEqual([
      setSortType(sortType),
    ]);
  });
});
