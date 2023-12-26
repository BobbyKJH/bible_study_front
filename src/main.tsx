import React from 'react';
import ReactDOM from 'react-dom/client';
/** App */
import App from '@/App.tsx';
/** Global Style */
import '@/App.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
