import React from 'react';
import  AppRoutes  from './appRouting';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import './app.css'

const App = function () {
    return <div className="wrapper">
      <ToastContainer></ToastContainer>
      <AppRoutes></AppRoutes>
    </div>
}


export default App;

