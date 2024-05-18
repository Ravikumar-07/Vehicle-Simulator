import React from 'react';
import './App.css';
import AddScenarioForm from './componnets/AddScenarioForm';
import AddVehicleForm from './componnets/AddVehicleForm';
import AllScenarios from './components/AllScenarios';
import Home from './components/Home';
import {toast}from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Routes,
  Router
}

from "react-router-dom";

import Navbar from './components/Navbar';
toast.configure();

function App() {
  return (
    <div className = "App">
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Routes path='/addscenario' element={<AddScenarioForm/>}/>
            <Routes path='/allscenarios' element={<AllScenarios/>}/>
            <Routes path='/addvehicleform' element={<AddVehicleForm/>}/>
            <Routes path='/' element={<Home/>}/>
          <Routes/>
        </div>
      </Router>
    </div>
  );
}

export default App;

