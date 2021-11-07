import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import App from './components/app/app';
import {AuthorizationStatus} from './const';
import {createApi} from './services/api';
import {requireAuthorization} from './store/actions';
import {checkAuthAction, fetchOffersAction} from './store/api-action';
import redirect from './store/middlewares/redirect';
import {rootReducer as reducer} from './store/root-reducer';
import 'react-toastify/dist/ReactToastify.css';

const api = createApi(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {extraArgument: api},
  }).concat(redirect),
});

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

ReactDOM.render(
  (
    <React.StrictMode>
      <Provider store={store}>
        <ToastContainer />
        <App />
      </Provider>
    </React.StrictMode>
  ),
  document.getElementById('root'),
);
