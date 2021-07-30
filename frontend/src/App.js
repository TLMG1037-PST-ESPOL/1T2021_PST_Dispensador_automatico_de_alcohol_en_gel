import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login  from "./pages/Login/Login.js";
import Home  from "./pages/HomePage/Home.js";
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      
      <Login/>
   </Router>

  );
}

export const backend = {
  host: "http://localhost",
  port: 8080
}

export default App;
  <Login/>

