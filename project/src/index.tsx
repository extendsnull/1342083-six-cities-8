import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';
import {setOffers} from './store/action';
import App from './components/app/app';
import offers from './mocks/offers';
import comments from './mocks/comments';

const store = createStore(reducer, composeWithDevTools());
store.dispatch(setOffers(offers));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App comments={comments} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
