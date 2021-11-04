import Logo from '../logo/logo';
import HeaderNav from '../header-nav/header-nav';

type HeaderProps = {
  hasNav?: boolean;
};

function Header(props: HeaderProps): JSX.Element {
  const {hasNav} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>

          {hasNav && <HeaderNav />}
        </div>
      </div>


    </header>
  );
}

export default Header;
