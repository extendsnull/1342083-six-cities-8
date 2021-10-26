import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {amsterdam} from './mocks/cities';
import offers from './mocks/offers';
import comments from './mocks/comments';

ReactDOM.render(
  <React.StrictMode>
    <App
      city={amsterdam}
      offers={offers}
      comments={comments}
    />
  </React.StrictMode>,
  document.getElementById('root'));
