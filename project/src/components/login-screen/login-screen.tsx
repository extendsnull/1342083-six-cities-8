import {FormEvent, MouseEvent, useRef} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {useHistory} from 'react-router';
import {loginAction} from '../../store/api-action';
import {Link} from 'react-router-dom';
import Header from '../header/header';
import {AppRoute, AuthorizationStatus} from '../../const';
import type {AuthData, State, ThunkAppDispatch} from '../../types';

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(authData: AuthData) {
    dispatch(loginAction(authData));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function LoginScreen(props: PropsFromRedux): JSX.Element {
  const {authorizationStatus, onSubmit} = props;

  const history = useHistory();

  if (authorizationStatus === AuthorizationStatus.Auth) {
    history.push(AppRoute.Main);
  }

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    if (loginRef.current && passwordRef.current) {
      onSubmit({
        login: loginRef.current?.value,
        password: passwordRef.current?.value,
      });
    }
  };

  const handleClick = (evt: MouseEvent<HTMLButtonElement>): void => {
    history.push(AppRoute.Main);
  };

  return (
    <div className="page page--gray page--login">
      <Header hideNav />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                onClick={handleClick}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Main}
              >
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export {LoginScreen};
export default connector(LoginScreen);
