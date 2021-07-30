import React,{Component} from 'react'; //Importancion de react
import Title from './components/Title/Title'; //importa el componente titulo
import Label from  './components/Label/Label'; //importa el componente label 
import Input from './components/Input/Input';
import './Login.css'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import {backend} from '../../App.js'





//Clase Login implementa la interfaz Component
//Los elementos del login se importan desde component para modularizar (Componentes reutilizables)
//implementa el metodo render
class Login extends Component{
 
    state={
        form:{
            usuario: '',
            contraseña: ''
        }
    }
     
    handleChange=async e=>{//manejador
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form)
    }

    iniciarSesion = async (e)=>{
        e.preventDefault();
        try {
          
            const res = await axios.get(backend.host + ':' + backend.port + '/usuarios/'+this.state.form.usuario,
            )
            if(res.data[0].contraseña == this.state.form.contraseña){
                console.log(res.data[0]);
                
            }else{
                if(!this.state.form.usuario){
                    console.log("ingrese nombre de usuario");
                }
                if(!this.state.form.contraseña){
                    console.log("ingrese contraseña");
                }else{
                    console.log("contraseña incorrecta");
                }
            }
        } catch (error) {
            alert("Usuario no existe"); //personalizar errores para lanzarlos y manejarlos
        }
    }
        

    render(){
        return(
        <div className="containerPrincipal">
             <div className="containerSecundario">
                <div className="form-group">
                    <Title text="Log In"/>
                    <Label text="Usuario"/>
                    <Input
                    atribute={{
                        id: 'Usuario',
                        name: 'usuario',
                        type: 'text',
                        placeholder: 'Ingrese Usuario'

                    }}
                    handleChange={this.handleChange}/>
                    <Label text="Contraseña"/>
                    <Input
                    atribute={{
                        id: 'Contraseña',
                        name: 'contraseña',
                        type: 'password',
                        placeholder: 'Ingrese Contraseña'

                    }}
                    handleChange={this.handleChange}/>

        
                <button className="botoncito" onClick={this.iniciarSesion}>Iniciar Sesión</button>

                </div>
           
                </div>
            </div>
        );
       
    }
}

export default Login;

/** e.preventDefault();
      try {
          
          const res = await axios.post(backend.host + ':' + backend.port + '/usuarios',
            { id_rol_usuario: 1,
              nombre_usuario:this.state.userName,
              correo_electronico:this.state.userEmail,
              contraseña:this.state.userPassword
            })
          console.log(res);
      } catch (error) {
          alert("Datos incompletos o usuario ya existe"); //personalizar errores para lanzarlos y manejarlos
      }
      
      this.getUsuarios();
      this.setState({userName:''});
      this.setState({userEmail:''});
      this.setState({userPassword:''});
      
    } */