import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  } from "react-router-dom";
  import Home from "./Components/HomePage";
function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/home" element = { <Home/>  }></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
