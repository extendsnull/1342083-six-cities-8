import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {AppRoute} from '../../const';

type LogoProps = {
  isActive?: boolean;
}

function Logo(props: LogoProps): JSX.Element {
  const logoClassNames: string = classNames({
    'header__logo-link': true,
    'header__logo-link--active': props.isActive,
  });

  return (
    <Link className={logoClassNames} to={AppRoute.Main}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>
  );
}

export default Logo;
