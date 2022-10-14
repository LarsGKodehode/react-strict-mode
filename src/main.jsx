// Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import './index.css';

// Components
import App from './App';

// Grab the DOM node we want to inject our application under
const root = ReactDOM.createRoot(document.getElementById("root"));

// Start rendering of our application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);