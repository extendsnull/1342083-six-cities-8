import {connect, ConnectedProps} from 'react-redux';
import {logoutAction} from '../../store/api-action';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import {AppRoute, AuthorizationInfoKey, AuthorizationStatus} from '../../const';
import {State, ThunkAppDispatch} from '../../store/types';

type HeaderProps = {
  hasNav?: boolean;
};

const mapStateToProps = ({USER}: State) => ({
  authorizationStatus: USER.authorizationStatus,
  authorizationInfo: USER.authorizationInfo,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogout() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & HeaderProps;

function Header(props: ConnectedComponentProps): JSX.Element {
  const {hasNav, authorizationStatus, authorizationInfo, onLogout} = props;

  const getHeaderNav = (status: AuthorizationStatus): JSX.Element | null => {
    switch (status) {
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
                    <img className="user__avatar" src={authorizationInfo?.[AuthorizationInfoKey.AvatarUrl]} alt="" />
                  </div>
                  <span className="header__user-name user__name">{authorizationInfo?.[AuthorizationInfoKey.Email]}</span>
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
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>

          {hasNav && getHeaderNav(authorizationStatus)}
        </div>
      </div>


    </header>
  );
}

export {Header};
export default connector(Header);
