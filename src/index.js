import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
//import ReactDOM from 'react-dom'

import './scss/app.scss';

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="*" element={<App />} />
  </Routes>
  </BrowserRouter>
  
  //</React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,

//   document.getElementById('root')
// );