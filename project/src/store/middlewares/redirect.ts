import browserHistory from '../../browser-history';
import {Middleware} from 'redux';
import {ActionType} from '../../const';
import type {State} from '../types';

const redirect: Middleware<unknown, State> =
  (_store) => (next) => (action) => {
    if (action.type === ActionType.RedirectToRoute) {
      browserHistory.push(action.payload);
    }

    return next(action);
  };

export default redirect;
