import {connect, ConnectedProps} from 'react-redux';
import {logoutAction} from '../../store/api-action';
import {Link} from 'react-router-dom';
import {AppRoute, AuthInfoKey, AuthorizationStatus} from '../../const';
import type {State, ThunkAppDispatch} from '../../types';

const mapStateToProps = ({authorizationStatus, authInfo}: State) => ({
  authorizationStatus,
  authInfo,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogout() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function HeaderNav(props: PropsFromRedux): JSX.Element | null {
  const {authorizationStatus, authInfo, onLogout} = props;

  switch (authorizationStatus) {
    case AuthorizationStatus.Auth: {
      return (
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link
                className="header__nav-link header__nav-link--profile"
                to={AppRoute.Favorites}
              >
                <div className="header__avatar-wrapper user__avatar-wrapper">
                  <img className="user__avatar" src={authInfo?.[AuthInfoKey.AvatarUrl]} alt="" />
                </div>
                <span className="header__user-name user__name">{authInfo?.[AuthInfoKey.Email]}</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className="header__nav-link"
                onClick={() => onLogout()}
                to={AppRoute.Main}
              >
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </ul>
        </nav>
      );
    }
    case AuthorizationStatus.NoAuth: {
      return (
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link
                className="header__nav-link header__nav-link--profile"
                to={AppRoute.Login}
              >
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__login">Sign in</span>
              </Link>
            </li>
          </ul>
        </nav>
      );
    }
    case AuthorizationStatus.Unknown:
    default: {
      return null;
    }
  }
}

export {HeaderNav};
export default connector(HeaderNav);
