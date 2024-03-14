import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import './App.scss'



const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer); // Crie a raiz com createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
