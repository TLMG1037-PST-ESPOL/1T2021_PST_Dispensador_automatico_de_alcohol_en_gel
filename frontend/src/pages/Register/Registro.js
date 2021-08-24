import React, { Component } from 'react'
import './Registro.css'
import axios from "axios"
import { backend } from '../../App.js'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';



class Registro extends Component {

  state = {
    users: [],
    user: [],
    dispensadores: [],
    userName: '',
    userEmail: '',
    userPassword: '',
    idDispensador: ''

  }
  //get Usuarios
  async getUsuarios() {
    const res = await axios.get(backend.host + ':' + backend.port + '/usuarios');
    this.setState({ users: res.data });
    console.log(this.state.users)
  }
  async getUsuario() {
    const res = await axios.get(backend.host + ':' + backend.port + '/usuarios/' + this.state.userName);
    this.setState({ user: res.data });
    console.log(this.state.user)
  }
  async getDispensadores() {
    const res = await axios.get(backend.host + ':' + backend.port + '/dispensador');
    this.setState({ dispensadores: res.data });
  
  }

  async componentDidMount() {
    await this.getUsuarios();
    await this.getUsuario();
    await this.getDispensadores();
    console.log(this.state.users);
    console.log(this.state.user);

  }

  //Funciones onChange para manejar evento del input
  onChangeEmail = (e) => {
    this.setState({
      userEmail: e.target.value
    })
    console.log(this.state.userEmail)
  }
  onChangeUser = (e) => {
    this.setState({
      userName: e.target.value
    })
  }
  onChangePassword = (e) => {
    this.setState({
      userPassword: e.target.value
    })
  }


  //Manejador para boton

  onClick = async (e) => {
    e.preventDefault();
    const filterAlpha = (str) => {
      if (typeof str !== "string") return false;
      return str.replace(/[A-Z]|[a-z]|[0-9]/g, "") === "";
    }
    try {
      const res = await axios.get(backend.host + ':' + backend.port + '/usuarios/' + this.state.userName,
      )
      console.log(this.state.userName)
      if (res.data[0].nombre_usuario == this.state.userName) {
        console.log("El usuario ingresado ya existe");
        swal({ title: "El usuario ingresado ya existe", icon: "error", button: "Entendido", })
      }
      if (!this.state.userName & !this.state.userEmail & !this.state.userPassword) {
        console.log("credenciales invalidas");
        swal({ title: "Ingrese credenciales", icon: "warning", button: "Entendido", });
      }
    } catch (error) {
      try {
         if (!filterAlpha(this.state.userName)) {
          console.log("Usuario invalido");
          swal({ title: "Usuario inválido", icon: "error", button: "Entendido", });
        } else if (!this.state.userEmail.includes("@")) {
          console.log("Correo invalido");
          swal({ title: "Correo electrónico inválido", icon: "error", button: "Entendido", });
        } else if (!this.state.userPassword) {
          console.log("Ingrese contraseña");
          swal({ title: "Contraseña inválida", icon: "error", button: "Entendido", });
        } else {
          const res = await axios.post(backend.host + ':' + backend.port + '/usuarios',
            {
              id_rol_usuario: 1,
              nombre_usuario: this.state.userName,
              correo_electronico: this.state.userEmail,
              contraseña: this.state.userPassword
            })
          console.log(res);
          if (res) {
            swal({
              title: "Gracias por registrarte!", text: "Tu cuenta ha sido creada con éxito!"
              , icon: "success", button: "Volver al inicio",
            }).then((value) => {
              window.location.href = "./";
            })
          }
        }
      }
      catch (error) {
        alert(":)"); //personalizar errores para lanzarlos y manejarlos
      }
    }




    this.getUsuarios();
    this.getDispensadores();
    this.setState({ userName: '' });
    this.setState({ userEmail: '' });
    this.setState({ userPassword: '' });


  }

  //metodo render
  render() {
    return (
      <div className="containerRegistro">
        <div className="containerRegistrosSec">
          <div className="form-group2">
            <Link className='nav-link active' to="/"><label> Atras </label></Link>
            <label>Correo electrónico: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.userEmail}
              placeholder="Ingrese correo electrónico"
              onChange={this.onChangeEmail}
              name="email"
            />

            <label>Nombre de usuario </label>
            <input
              type="text"
              className="form-control"
              value={this.state.userName}
              placeholder="Ingrese nombre de usuario"
              onChange={this.onChangeUser}
              name="username"
            />

            <label>Contraseña: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.userPassword}
              placeholder="Ingrese contraseña"
              onChange={this.onChangePassword}
              name="password"
            />
            <button className="Registrarse" onClick={this.onClick}>Registrarse
            </button>



          </div>
        </div>
      </div>
    )
  }
}
export default Registro
