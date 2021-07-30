import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from './components/Logo/Logo'
import Bgr from './components/background/bg'
class Home extends Component {
  render() {
    return (
      <div>

        <nav class="navbar navbar-dark bg-primary">
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
      
      
      <Logo/>
      
      </div>
      
    );}
}
export default Home