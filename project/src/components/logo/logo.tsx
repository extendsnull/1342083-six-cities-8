import {useLocation} from 'react-router';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {getClassNames} from '../../utils';

function Logo(): JSX.Element {
  const location = useLocation();
  const isMainScreen = location.pathname === AppRoute.Main;

  const logoClassNames: string = getClassNames([
    'header__logo-link',
    {'header__logo-link--active': isMainScreen},
  ]);

  const logoImg = <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />;

  if (isMainScreen) {
    return (
      <span className={logoClassNames}>
        {logoImg}
      </span>
    );
  }

  return (
    <Link className={logoClassNames} to={AppRoute.Main}>
      {logoImg}
    </Link>
  );
}

export default Logo;
