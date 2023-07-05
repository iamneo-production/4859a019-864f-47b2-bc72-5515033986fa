import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  } from "react-router-dom";
  import Cart from "./Components/Cart";
  //import {Auth,Admin} from "./Components/Auth";
  function App() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/cart" element = {<Cart/> }></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
