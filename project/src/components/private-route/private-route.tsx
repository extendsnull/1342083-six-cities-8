import {Redirect, Route, RouteProps} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteType = RouteProps & {
  children: JSX.Element;
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute(props: PrivateRouteType): JSX.Element {
  const {authorizationStatus, children, ...rest} = props;
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <Route {...rest}>
      {isAuthorized ? children : <Redirect to={AppRoute.Login} />}
    </Route>
  );
}

export default PrivateRoute;
