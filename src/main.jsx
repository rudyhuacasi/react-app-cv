import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/delius-swash-caps"; // Defaults to weight 400
import "@fontsource/delius-swash-caps/400.css"; // Specify weight
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
