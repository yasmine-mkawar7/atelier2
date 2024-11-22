import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fortawesome/fontawesome-free/css/all.css";
import 'bootstrap/dist/css/bootstrap.min.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
