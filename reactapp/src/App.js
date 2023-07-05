import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  } from "react-router-dom";
  import Order from "./Components/Order";
  function App() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/order" element = { <Order/> }></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
