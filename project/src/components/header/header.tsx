import Logo from '../logo/logo';
import HeaderNav from '../header-nav/header-nav';

type HeaderProps = {
  hideNav?: boolean;
};

function Header(props: HeaderProps): JSX.Element {
  const {hideNav} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>

          {!hideNav && <HeaderNav />}
        </div>
      </div>


    </header>
  );
}

export default Header;
