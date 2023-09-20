/* import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './index.css';
ReactDom.render (<App />, document.getElementById('root')); */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css';

ReactDOM.render(
 <React.StrictMode>
 <HashRouter>
 <Routes>
 <Route path="/" element={<App/>} />
 <Route path="/about" element={<About/>}/>
 </Routes>
 </HashRouter>
 </React.StrictMode>,
 document.getElementById("root")
);