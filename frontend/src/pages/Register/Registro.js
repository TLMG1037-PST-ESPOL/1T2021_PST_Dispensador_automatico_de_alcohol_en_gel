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
  async getUsuarioss() {
    const res = await axios.get(backend.host + ':' + backend.port + '/usuarios');
    this.setState({users:res.data});
  }

    //Funciones onChange para manejar evento del input
    onChangeEmail = (e)=>{
      this.setState({
          userEmail: e.target.value
      })
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
          const res = await axios.post(backend.host + ':' + backend.port + '/usuarios',
            { userName:this.state.userName,
              userEmail:this.state.userEmail,
              contraseña:this.state.userPassword
            })
          console.log(res);
      } catch (error) {
          alert(error.response.data);
      }
      
      this.getEstudiantes();
      this.setState({idEstudiante:''});
      this.setState({nombreEstudiante:''});
      this.setState({apellidoEstudiante:''});
    }

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
          <button className="Registrarse" onClick={this.OnClick}>Registrarse</button>
        </div>
      </div>
    </div>
      )}
}
export default Registro

/** 

export default class ShowEstudiantes extends Component {
  render() {
      return (
          <div className="row mx-3">
              <div className="col-md-4">
                  <div className="card card-body">
                      <h4>Ingresar estudiante</h4>
                      <form onSubmit={this.onSubmit}>
                          <div className="form-group">
                              <input type="text" className="form-control my-1" value={this.state.idEstudiante} placeholder="Id" onChange={this.onChangeId} />
                              <input type="text" className="form-control my-1" value={this.state.nombreEstudiante} placeholder="Nombre" onChange={this.onChangeNombre} />
                              <input type="text" className="form-control my-1" value={this.state.apellidoEstudiante} placeholder="Apellido" onChange={this.onChangeApellido} />
                          </div>
                          <button className="btn btn-primary my-3" type='submit'>Guardar</button>
                      </form>
                  </div>
              </div>

              <div className="col-md-8">
                  <ul className="list-group">
                      {
                          this.state.users.map(user => (
                              <li className="list-group-item list-group-item-action" key={user.id} id={user.id} onDoubleClick={this.ondelete}>
                                  {user.nombre + " " + user.apellido}
                              </li>)
                          )
                      }
                  </ul>
              </div>
          </div>

      )
  }



  
onChangeId = (e)=>{
  this.setState({
      idEstudiante: e.target.value
  })
}

onChangeNombre = (e)=>{
  this.setState({
      nombreEstudiante: e.target.value
  })
}

onChangeApellido = (e)=>{
  this.setState({
      apellidoEstudiante: e.target.value
  })
}

onSubmit = async (e)=>{
  e.preventDefault();
  try {
      const res = await axios.post(backend.host + ':' + backend.port + '/estudiantes',{
          id:this.state.idEstudiante,
          nombre:this.state.nombreEstudiante,
          apellido:this.state.apellidoEstudiante
      })
      console.log(res);
  } catch (error) {
      alert(error.response.data);
  }
  
  this.getEstudiantes();
  this.setState({idEstudiante:''});
  this.setState({nombreEstudiante:''});
  this.setState({apellidoEstudiante:''});
}

ondelete = async (e)=>{

  try {
      const res = await axios.delete(backend.host + ':' + backend.port + '/estudiantes/'+ e.target.getAttribute('id') );
      console.log(res);
      this.getEstudiantes();
  } catch (error) {
      alert(error.response.data);
  }
  
}

  state = {
      users: [],
      idEstudiante: '',
      nombreEstudiante: '',
      apellidoEstudiante: ''

  }
  async getEstudiantes() {
      const res = await axios.get(backend.host + ':' + backend.port + '/estudiantes');
      this.setState({ users: res.data });
  }
  async componentDidMount() {
      await this.getEstudiantes();
      console.log(this.state.users);
  }

}
*/