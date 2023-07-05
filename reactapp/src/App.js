import React from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import AddProduct from "./Components/AddProduct";
function App() {
  return (
    <>
      <Router>
        <Routes>
          
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
