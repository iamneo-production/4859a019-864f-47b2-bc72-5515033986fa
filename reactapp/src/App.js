import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  } from "react-router-dom";
  import ViewOrders from "./Components/ViewOrders";
function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/admin/orders" element = {<ViewOrders/>}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;