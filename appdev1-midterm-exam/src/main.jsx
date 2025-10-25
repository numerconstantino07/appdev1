import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./assets/css/templatemo-style.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/fontawesome.css";
import "./assets/css/templatemo-style.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// Note: The following JavaScript code is originally from public/templatemo-personal-javascripts.js