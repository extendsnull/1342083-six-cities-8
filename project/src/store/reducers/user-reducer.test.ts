import {AuthorizationStatus} from '../../const';
import {mockAuthorizationInfo} from '../../utils';
import {requireAuthorization, requireLogout, setAuthorizationInfo, setIsAuthorized} from '../actions';
import type {UserProcess} from '../types';
import {userReducer} from './user-reducer';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  isAuthorized: false,
  authorizationInfo: null,
};

describe('Reducer: userReducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(userReducer(void 0, {type: 'unknownAction'})).toEqual(initialState);
  });

  it('should set authorization status', () => {
    const state = {...initialState};

    expect(userReducer(state, requireAuthorization(AuthorizationStatus.Auth))).toEqual<UserProcess>({
      ...state,
      authorizationStatus: AuthorizationStatus.Auth,
    });
  });

  it('should set authorization status to unauthorized if user is logout', () => {
    const state = {...initialState};

    expect(userReducer(state, requireLogout())).toEqual<UserProcess>({
      ...state,
      authorizationStatus: AuthorizationStatus.NoAuth,
    });
  });

  it('should set authorized status to truthy if user is authorized', () => {
    const state = {...initialState};
    const isAuthorized = true;

    expect(userReducer(state, setIsAuthorized(isAuthorized))).toEqual<UserProcess>({
      ...state,
      isAuthorized,
    });
  });

  it('should set authorization info', () => {
    const state = {...initialState};
    const authorizationInfo = mockAuthorizationInfo();

    expect(userReducer(state, setAuthorizationInfo(authorizationInfo))).toEqual<UserProcess>({
      ...state,
      authorizationInfo,
    });
  });
});
