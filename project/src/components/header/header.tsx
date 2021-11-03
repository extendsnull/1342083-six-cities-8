import {connect, ConnectedProps} from 'react-redux';
import Logo from '../logo/logo';
import HeaderNav from '../header-nav/header-nav';
import {State} from '../../types';

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Header(props: PropsFromRedux): JSX.Element {
  const {authorizationStatus} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>

          <HeaderNav authorizationStatus={authorizationStatus} />
        </div>
      </div>


    </header>
  );
}

export {Header};
export default connector(Header);
