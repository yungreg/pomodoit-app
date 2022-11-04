/*
^note: this page is what's being shown when you start your react app. note the <APP> being shown between the 
todo: import BroweserRouter an dreplace strict mode w/ that 
^ Browaser router allows you to use routes

*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Pomodoit } from './pomodoit';
import { BrowserRouter } from "react-router-dom";


const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(
  <BrowserRouter>
    <Pomodoit />
  </BrowserRouter>
);
