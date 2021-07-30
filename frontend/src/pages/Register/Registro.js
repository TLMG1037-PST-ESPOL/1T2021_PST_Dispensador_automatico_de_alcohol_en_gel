import React from 'react'
import './Registro.css'

const Registro=()=>{

    return(
        <div className="containerRegistro">
        <div className="containerRegistrosSec">
            <text Registrarse />
            <div className="form-group2">
            <label>Correo electrónico: </label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={(e)=>setEmailReg(e.target.value)}

              
            />
            <label>Nombre de usuario </label>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={(e)=>setUsernameReg(e.target.value)}
            />

            <label>Contraseña: </label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={(e)=>setPasswordReg(e.target.value)}
             
            />
            <button className="Registrarse">Registrarse</button>
          </div>
        </div>
      </div>
        )
}
export default Registro
