import {combineReducers} from 'redux';
import {NameSpace} from './const';
import {dataReducer, userReducer} from './reducers';

const rootReducer = combineReducers({
  [NameSpace.Data]: dataReducer,
  [NameSpace.User]: userReducer,
});

type RootState = ReturnType<typeof rootReducer>;

export type {
  RootState
};

export {
  rootReducer
};
