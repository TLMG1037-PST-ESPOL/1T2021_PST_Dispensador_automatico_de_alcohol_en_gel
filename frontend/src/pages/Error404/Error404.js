import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import  './Error404.scss'

const Error404 =()=>{

    return(
    <div>
      <div className="mars"></div>
        <img src="https://assets.codepen.io/1538474/404.svg" className="logo-404" />
        <img src="https://assets.codepen.io/1538474/meteor.svg" class="meteor" />
        <p className="title">NOT FOUND</p>
        <p className="subtitle">
            La página que a la que estas tratando de acceder no existe <br /> o ha sido removida.
        </p>
        <div align="center">
            <a className="boton" href="/">Regresar al HomePage</a>
        </div>
        <img src="https://assets.codepen.io/1538474/astronaut.svg" class="astronaut" />
    </div>
    )
}
export default Error404