import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type HeaderNavProps = {
  authorizationStatus: AuthorizationStatus;
}

function HeaderNav(props: HeaderNavProps): JSX.Element | null {
  switch (props.authorizationStatus) {
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
                </div>
                <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className="header__nav-link"
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

export default HeaderNav;
