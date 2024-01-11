import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/index.css';
import { NavigationProvider } from './context/navigation';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);