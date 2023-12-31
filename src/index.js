import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {store  }from  "./Store"
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react' 
import persistStore from 'redux-persist/es/persistStore';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer } from 'react-toastify'
    
const persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate  loading={null} persistor={persistor}>
  <BrowserRouter>
 
    <App />
  <ToastContainer/>
  </BrowserRouter>
  </PersistGate>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
