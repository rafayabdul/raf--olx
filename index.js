import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import store, { persistor } from "./app/store/store";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const { PUBLIC_URL } = process.env;

ReactDOM.render(
<React.StrictMode>
<App
store={store}
persistor={persistor}
basename={PUBLIC_URL}
/>
</React.StrictMode>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

/*
<App
store={store}
persistor={persistor}
basename={PUBLIC_URL}
/>
*/
serviceWorker.unregister();


/*
<App
store={store}
persistor={persistor}
basename={PUBLIC_URL}
/>
*/