import React from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import AddProduct from "./Components/AddProduct";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route element={<Auth/>}>
          <Route exact path="/" element = {<Login/>}></Route>
          <Route path="/signup" element = {<Signup/>}></Route>
        </Route>
          <Route element={<Admin/>}>
            <Route path="/admin" element = {<Dashboard/>}></Route>
            
            <Route path="/addProduct" element = {<AddProduct/>}></Route>
          </Route> 
        </Routes>
      </Router>
    </>
  )
}


export default App;
