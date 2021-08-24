import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login  from "./pages/Login/Login.js";
import Home  from "./pages/HomePage/Home.js";
import Registro from "./pages/Register/Registro.js";
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from "./pages/UserGUI/Inicio/Inicio.js";
import Error404 from "./pages/Error404/Error404.js";
import Dispensador from "./pages/DispensadorGUI/Dispensador.js";


function App() {
  return (
    <Router>
      <Switch>

        <Route  exact path="/" exact component={Home} />
        <Route exact path="/login"  exact component={Login}/>  
        <Route exact path="/register" exact component={Registro}/>  
        <Route exact path="/inicio" exact component={Inicio}/> 
        <Route path="/2709" exact component={Dispensador}/> 
        <Route path="*" exact component={Error404} status={404}/>
      </Switch>
   </Router>

  );
}

export const backend = {
  host: "http://localhost",
  port: 8080
}

export default App;
  <Login/>

