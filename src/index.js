import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

// import Css Files
import "./assets/css/style.css"
import "./assets/css/navbar.css"
import "./assets/css/meanmenu.css"
import "./assets/css/fontawesome.all.min.css"
import "./assets/css/responsive.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

