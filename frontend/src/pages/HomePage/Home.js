import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Automatic Dispenser</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/login">Log in</Link>
              <Link className="nav-link" to="/register">Registrarse</Link>
              </div>
          </div>
        </div>
      </nav>
      
    );}
}