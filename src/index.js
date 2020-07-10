import React ,{Suspense}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18next';
import {IntlProvider} from 'react-intl';
ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale='en'>
    <Suspense fallback={(<div>Loading....</div>)}>
    <App />
    </Suspense>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
