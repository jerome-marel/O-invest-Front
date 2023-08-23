import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/index';

const rootElement = document.getElementById('root')!;

const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App /> 
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
