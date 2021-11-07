import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import redirect from './store/middlewares/redirect';
import {rootReducer} from './store/root-reducer';
import {requireAuthorization} from './store/action';
import App from './components/app/app';
import {ToastContainer} from 'react-toastify';
import {createApi} from './services/api';
import {AuthorizationStatus} from './const';
import {checkAuthAction, fetchOffersAction} from './store/api-action';
import type {ThunkAppDispatch} from './store/types';
import 'react-toastify/dist/ReactToastify.css';

const api = createApi(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
