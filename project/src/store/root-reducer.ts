import {combineReducers} from 'redux';
import {data, user} from './reducers';

enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}

const rootReducer = combineReducers({
  [NameSpace.Data]: data,
  [NameSpace.User]: user,
});

type RootState = ReturnType<typeof rootReducer>;

export type {
  RootState
};

export {
  rootReducer
};
