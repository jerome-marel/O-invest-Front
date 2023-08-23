import React from 'react';
import { createRoot } from 'react-dom/client'; // Importez createRoot depuis "react-dom/client"
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/index.ts';

const rootElement = document.getElementById('root')!;

const root = createRoot(rootElement); // Utilisez createRoot ici
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
