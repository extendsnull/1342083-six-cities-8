import {FormEvent, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {setActiveCity} from '../../store/actions';
import {loginAction} from '../../store/api-action';
import {getIsAuthorized} from '../../store/selectors';
import {getRandomCity} from '../../utils/common';
import Header from '../header/header';

function LoginScreen(): JSX.Element {
  const isAuthorized = useSelector(getIsAuthorized);
  const dispatch = useDispatch();

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    if (loginRef.current && passwordRef.current) {
      dispatch(loginAction({
        login: loginRef.current?.value,
        password: passwordRef.current?.value,
      }));
    }
  };

  if (isAuthorized) {
    return <Redirect to={AppRoute.Main} />;
  }

  const randomCity = getRandomCity();

  const handleCityClick = () => {
    dispatch(setActiveCity(randomCity));
  };

  return (
    <div className="page page--gray page--login">
      <Header hasNav={false} />
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
                <label className="visually-hidden" htmlFor="email">E-mail</label>
                <input
                  id="email"
                  className="login__input form__input"
                  data-testid="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  ref={loginRef}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="password">Password</label>
                <input
                  id="password"
                  className="login__input form__input"
                  data-testid="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  ref={passwordRef}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Main}
                onClick={handleCityClick}
                data-testid="show-location"
              >
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
