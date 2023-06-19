import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  } from "react-router-dom";

import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Home from "./Components/HomePage";
import Cart from "./Components/Cart";
import Order from "./Components/Order";
import Dashboard from "./Components/Dashboard";
import ViewOrders from "./Components/ViewOrders";
import AddProduct from "./Components/AddProduct";
import {Auth,Admin} from "./Components/Auth/Auth";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element = {<Login/>}></Route>
          <Route path="/signup" element = {<Signup/>}></Route>
          <Route element={<Auth/>}>
            <Route path="/home" element = { <Home/>  }></Route>
            <Route path="/cart" element = {<Cart/> }></Route>
            <Route path="/order" element = { <Order/> }></Route>
          </Route>
          <Route element={<Admin/>}>
            <Route path="/admin" element = {<Dashboard/>}></Route>
            <Route path="/admin/orders" element = {<ViewOrders/>}></Route>
            <Route path="/addProduct" element = {<AddProduct/>}></Route>
          </Route> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
