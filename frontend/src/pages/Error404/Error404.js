import  './Error404.scss'

const Error404 =()=>{

    return(
    <div className="principal">
      <div className="mars"></div>
        <img src="https://assets.codepen.io/1538474/404.svg" className="logo-404" />
        <img src="https://assets.codepen.io/1538474/meteor.svg" className="meteor" />
        <p className="title">NOT FOUND</p>
        <p className="subtitle">
            La página que a la que estas tratando de acceder no existe <br /> o ha sido removida.
        </p>
        <div align="center">
            <a className="boton" href="/">Toca el botón de "atras"!!</a>
        </div>
        <img src="https://assets.codepen.io/1538474/astronaut.svg" className="astronaut" />
    </div>
    )
}
export default Error404