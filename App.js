import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { Routes } from "./router/Routes";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ store, persistor, basename }) {
  return (
    /* Provide Redux store */
    <Provider store={store}>
        <React.Suspense>
          {/* Override `basename` (e.g: `homepage` in `package.json`) */}
          <BrowserRouter basename={basename}>
              <Routes />
          </BrowserRouter>
        </React.Suspense>
    </Provider>
  );
}
