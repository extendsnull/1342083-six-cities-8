import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import redirect from './store/middlewares/redirect';
import {reducer} from './store/reducer';
import {requireAuthorization} from './store/action';
import App from './components/app/app';
import comments from './mocks/comments';
import {ToastContainer} from 'react-toastify';
import {createApi} from './services/api';
import {AuthorizationStatus} from './const';
import {checkAuthAction, fetchOffersAction} from './store/api-action';
import type {ThunkAppDispatch} from './types';
import 'react-toastify/dist/ReactToastify.css';

const api = createApi(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = createStore(
  reducer,
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
      <App comments={comments} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
