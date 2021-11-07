import {memo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationInfoKey} from '../../const';
import {logoutAction} from '../../store/api-action';
import {getAuthorizationInfo, getIsAuthorized} from '../../store/selectors';
import Logo from '../logo/logo';

type HeaderProps = {
  hasNav?: boolean;
};

function Header(props: HeaderProps): JSX.Element {
  const {hasNav = true} = props;
  const isAuthorized = useSelector(getIsAuthorized);
  const authorizationInfo = useSelector(getAuthorizationInfo);
  const dispatch = useDispatch();

  const handleLogoutClick = () => dispatch(logoutAction());

  const getHeaderNav = (): JSX.Element => {
    if (isAuthorized && authorizationInfo) {
      return (
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link
                className="header__nav-link header__nav-link--profile"
                to={AppRoute.Favorites}
              >
                <div className="header__avatar-wrapper user__avatar-wrapper">
                  <img
                    className="user__avatar"
                    alt=""
                    src={authorizationInfo[AuthorizationInfoKey.AvatarUrl]}
                  />
                </div>
                <span className="header__user-name user__name">
                  {authorizationInfo[AuthorizationInfoKey.Email]}
                </span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className="header__nav-link"
                to={AppRoute.Main}
                onClick={handleLogoutClick}
              >
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </ul>
        </nav>
      );
    }

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
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {hasNav && getHeaderNav()}
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
