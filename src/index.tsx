import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import {App} from './components/App';

import {Provider} from 'react-redux'
import store from './tools/store'


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
  <App/>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

