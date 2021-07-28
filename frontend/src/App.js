import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login  from "./pages/Login/Login.js";


function App() {
  return (
    <Router>
      <Login/>
   </Router>

  );
}

export default App;
