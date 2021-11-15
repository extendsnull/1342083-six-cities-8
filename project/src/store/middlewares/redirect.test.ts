import {configureMockStore} from '@jedmao/redux-mock-store';
import {AnyAction} from 'redux';
import {AppRoute} from '../../const';
import type {State} from '../types';
import {redirectToRoute} from '../actions';
import redirect from './redirect';

const fakeHistory = {
  location: {
    pathname: '',
  },
  push(path: string) {
    this.location.pathname = path;
  },
};

jest.mock('../../browser-history', () => fakeHistory);

const middlewares = [redirect];
const mockStore = configureMockStore<State, AnyAction>(middlewares);
const store = mockStore();

describe('Middleware: redirect', () => {
  beforeAll(() => {
    fakeHistory.push('');
  });

  it('should be redirect to /login', () => {
    store.dispatch(redirectToRoute(AppRoute.Login));
    expect(fakeHistory.location.pathname).toBe(AppRoute.Login);
    expect(store.getActions()).toEqual([
      redirectToRoute(AppRoute.Login),
    ]);
  });

  it('should not to be redirect /main because bad action', () => {
    store.dispatch({type: 'unknownAction', payload: AppRoute.Main});
    expect(fakeHistory.location.pathname).not.toBe(AppRoute.Main);
  });
});
