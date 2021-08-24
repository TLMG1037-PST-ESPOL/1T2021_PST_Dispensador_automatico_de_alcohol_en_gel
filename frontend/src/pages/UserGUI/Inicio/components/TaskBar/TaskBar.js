import React from "react";
import { Link } from 'react-router-dom'


const TaskBar = ({text}) => {
  const mobile = window.innerWidth < 600;

  return (
    <div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark .text-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/inicio">{text}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/dispositivo">Dispositivos</Link>
            <Link className="nav-link" to="/">Log Out</Link>
            </div>
        </div>
      </div>
    </nav>



    </div>
  
  

  
  
  
  
  )}
export default TaskBar