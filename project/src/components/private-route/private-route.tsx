import {useSelector} from 'react-redux';
import {Redirect, Route, RouteProps} from 'react-router-dom';
import {AppRoute} from '../../const';
import {getIsAuthorized} from '../../store/selectors';

type PrivateRouteType = RouteProps & {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteType): JSX.Element {
  const {children, ...rest} = props;
  const isAuthorized = useSelector(getIsAuthorized);

  return (
    <Route {...rest}>
      {isAuthorized ? children : <Redirect to={AppRoute.Login} />}
    </Route>
  );
}

export default PrivateRoute;
