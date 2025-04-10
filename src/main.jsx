import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/News-react-vite">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Optional: log performance metrics
reportWebVitals(console.log);
