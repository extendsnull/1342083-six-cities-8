import {connect, ConnectedProps} from 'react-redux';
import {Redirect, Route, RouteProps} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import type {State} from '../../types';

type PrivateRouteType = RouteProps & {
  children: JSX.Element;
  authorizationStatus: AuthorizationStatus;
}

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & PrivateRouteType;

function PrivateRoute(props: ConnectedComponentProps): JSX.Element {
  const {authorizationStatus, children, ...rest} = props;
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <Route {...rest}>
      {isAuthorized ? children : <Redirect to={AppRoute.Login} />}
    </Route>
  );
}

export {PrivateRoute};
export default connector(PrivateRoute);
