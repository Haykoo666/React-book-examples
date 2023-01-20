import ReactDOM  from 'react-dom/client';
import React from 'react';
import reportWebVitals from './reportWebVitals';
import "./App.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
)

reportWebVitals(console.log);