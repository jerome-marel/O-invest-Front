import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root')!;

const root = createRoot(rootElement);
root.render(
  
    <BrowserRouter>
      <React.StrictMode>
        <App /> 
      </React.StrictMode>
    </BrowserRouter>
  
);
