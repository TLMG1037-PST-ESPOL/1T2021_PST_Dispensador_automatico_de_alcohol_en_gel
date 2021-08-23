import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from './components/Logo/Logo'
import abajo from './components/abajo/abajo'
import Title from '../Login/components/Title/Title'
import Contact from '../Login/components/Contact/Contact'
import Info from '../Login/components/Info/Info'
class Home extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
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
      
      <div className = "abajo-container">
        <Logo/>
      <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>¿Quiénes somos?</h6>
            <p class="text-justify">Somos una compañía que busca optimizar y automatizar los sisteas de bioisegurdad, de modo que cada usuario pueda manejar la información que registra cada uno de sus dispositivos.<i>Con SMART SANITIZER, make it easy, make it clean. </i></p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categorías</h6>
            <ul class="footer-links">
              <li><a href="https://www.youtube.com/watch?v=yG7MPEQm1-w">About Us</a></li>
              <li><a href="https://www.youtube.com/watch?v=yG7MPEQm1-w">Contact Us</a></li>
              <li><a href="https://www.youtube.com/watch?v=yG7MPEQm1-w">Contribute</a></li>
              <li><a href="https://www.youtube.com/watch?v=yG7MPEQm1-w">Privacy Policy</a></li>
              <li><a href="https://www.youtube.com/watch?v=yG7MPEQm1-w">Sitemap</a></li>
              <li><a href="https://www.youtube.com/watch?v=yG7MPEQm1-w">Templates</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Redes Sociales</h6>
            <ul class="footer-links">
              <li><a href="https://www.facebook.com/ID033478">Facebook</a></li>
              <li><a href="https://www.instagram.com/jeremi_e5/">Instagram</a></li>
              <li><a href="https://www.youtube.com/watch?v=yG7MPEQm1-w">Twiter</a></li>
              <li><a href="https://www.youtube.com/watch?v=yG7MPEQm1-w">Youtube</a></li>
              <li><a href="https://www.youtube.com/watch?v=yG7MPEQm1-w">linkedin</a></li>
            </ul>
          </div>
        </div>
        <hr>
      </hr>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
         <a href="https://www.youtube.com/watch?v=yG7MPEQm1-w">TheBestOfEspol</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href=""><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
      </div>
    </footer>
      
        
      </div>
      </div>
    );}
}
export default Home