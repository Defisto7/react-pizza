import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
//import ReactDOM from 'react-dom'
import store from './redux/store'
import './scss/app.scss';

import App from "./App";
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
  <Routes>
    <Route path="*" element={<App />} />
  </Routes>
  </Provider>
  </BrowserRouter>
  
  //</React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,

//   document.getElementById('root')
// );