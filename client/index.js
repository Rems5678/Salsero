import  React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import {BrowserRouter} from 'react-router-dom';
import styles from './assets/application.scss';

import App from './App.jsx';

ReactDOM.render(
<Provider store = {store}>
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
</Provider>, 
document.getElementById('root'));
