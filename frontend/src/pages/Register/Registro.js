import React, { Component } from 'react'
import './Registro.css'
import axios from "axios"
import { backend } from '../../App.js'
import { Link } from 'react-router-dom'

class Registro extends Component {

  state = {
    users: [],
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
  async getDispensadores() {
    const res = await axios.get(backend.host + ':' + backend.port + '/dispensadores');
    this.setState({ dispensadores: res.data });
    console.log(this.state.dispensadores)
  }

  async componentDidMount() {
    await this.getUsuarios();
    await this.getDispensadores();
    console.log(this.state.users);
    console.log(this.state.dispensadores);
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
  onChangeIdDispensador = (e) => {
    this.setState({
      idDispensador: e.target.value
    })
    console.log(this.state.idDispensador)
  }

  //Manejador para boton

  onClick = async (e) => {
    e.preventDefault();
    const filterAlpha = (str) => {
      if (typeof str !== "string") return false;
      return str.replace(/[A-Z]|[a-z]|[0-9]/g, "") === "";
    }
    try {
      if(!filterAlpha(this.state.userName) & !this.state.userEmail.includes("@") & !this.state.userPassword){
        console.log("credenciales invalidas");
        alert(`ingrese nombre de usuario y correo valido`);
      }else if (!filterAlpha(this.state.userName)) {
        console.log("Usuario invalido");
        alert(`ingrese nombre de usuario valido`);
      }else if(!this.state.userEmail.includes("@")){
        console.log("correo invalido");
        alert(`ingrese correo valido`);
      }else if(!this.state.userPassword){
        console.log("Ingrese contraseña");
        alert(`ingrese contraseña`);
      }else {
        const res = await axios.post(backend.host + ':' + backend.port + '/usuarios',
          {
            id_rol_usuario: 1,
            nombre_usuario: this.state.userName,
            correo_electronico: this.state.userEmail,
            contraseña: this.state.userPassword
          })
        console.log(res);
        if (res) {
          alert("Cuenta registrada");
          window.location.href = "./";
        }
      }
    } catch (error) {
      alert("Datos incompletos o usuario ya existe"); //personalizar errores para lanzarlos y manejarlos
    }
    this.getUsuarios();
    try {
      const res1 = await axios.post(backend.host + ':' + backend.port + '/dispensadores',
        {
          id_dispensador: this.state.idDispensador,
          no_usos: 1,
          nivel_bajo: 1,
          id_ubicacion: 123,
          id_usuario: 21
        });
      console.log(res1);
      if (res1) {
        alert("Dispensador registrado");
        window.location.href = "./";
      }
    } catch (error) {
      alert("Dispensador no registrado"); //personalizar errores para lanzarlos y manejarlos
    }

    this.getDispensadores();
    this.setState({ userName: '' });
    this.setState({ userEmail: '' });
    this.setState({ userPassword: '' });
    this.setState({ idDispensador: '' });

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

            <label>Id del dispensador </label>
            <input
              type="text"
              className="form-control"
              value={this.state.idDispensador}
              placeholder="Ingrese id del dispensador"
              onChange={this.onChangeIdDispensador}
              name="idDispensador"
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
