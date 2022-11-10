import React from 'react';
import store, {persistor} from './Store/store';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import './bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    {/* <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode > */}
          <App />
      {/* </React.StrictMode>
    </PersistGate> */}
  </Provider>
);