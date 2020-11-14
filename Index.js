/**
 * Create React App entry point. This and `public/index.html` files can not be
 * changed or moved.
 */
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import store, { persistor } from "./store/store";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { PUBLIC_URL } = process.env;


/* const mock = */


ReactDOM.render(
  <App
    store={store}
    persistor={persistor}
    basename={PUBLIC_URL}
  />,
  document.getElementById("app")
);
