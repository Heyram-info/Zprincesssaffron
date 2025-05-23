import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "https://zprincesssaffron-backend.vercel.app";
axios.defaults.withCredentials = true;

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   </StrictMode>
    <Router>
    <App />
    </Router>
  
  ,
)
