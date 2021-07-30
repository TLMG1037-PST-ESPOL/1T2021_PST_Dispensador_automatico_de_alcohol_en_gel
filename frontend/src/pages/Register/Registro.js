import React, { Component } from 'react'
import './Registro.css'
import axios from "axios"
import {backend} from '../../App.js'

class Registro extends Component{

  state = {
    users: [],
    userName: '',
    userEmail: '',
    userPassword: ''

  }
  //get Usuarios
  async getUsuarios() {
    const res = await axios.get(backend.host + ':' + backend.port + '/usuarios');
    this.setState({users:res.data});
    console.log(this.state.users)
  }
  
  async componentDidMount() {
    await this.getUsuarios();
    console.log(this.state.users);
  } 

    //Funciones onChange para manejar evento del input
    onChangeEmail = (e)=>{
      this.setState({
          userEmail: e.target.value
      })
      console.log(this.state.userEmail)
    }
    
    onChangeUser = (e)=>{
      this.setState({
          userName: e.target.value
      })
    }
    
    onChangePassword = (e)=>{
      this.setState({
          userPassword: e.target.value
      })
    }
  
    //Manejador para boton

    onClick = async (e)=>{
      e.preventDefault();
      try {
          console.log("cacacaca")
          const res = await axios.post(backend.host + ':' + backend.port + '/usuarios',
            { id_rol_usuario: 1,
              nombre_usuario:this.state.userName,
              correo_electronico:this.state.userEmail,
              contraseña:this.state.userPassword
            })
          console.log(res);
      } catch (error) {
          alert("Queeeee");
      }
      
      this.getUsuarios();
      this.setState({userName:''});
      this.setState({userEmail:''});
      this.setState({userPassword:''});
      
    }
    //metodo render
  render(){
    return(
      <div className="containerRegistro">
      <div className="containerRegistrosSec">
          <div className="form-group2">
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
            type="text"
            className="form-control"
            value={this.state.userPassword} 
            placeholder="Ingrese contraseña" 
            onChange={this.onChangePassword}
            name="password"
            
            
          />
          <button className="Registrarse" onClick={this.onClick}>Registrarse</button>
        </div>
      </div>
    </div>
      )}
}
export default Registro
