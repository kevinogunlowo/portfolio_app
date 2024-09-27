import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // You can remove this if no CSS file is present
import App from './App';
import reportWebVitals from './reportWebVitals';  // Optional, can remove if unnecessary

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional for performance monitoring
reportWebVitals();
