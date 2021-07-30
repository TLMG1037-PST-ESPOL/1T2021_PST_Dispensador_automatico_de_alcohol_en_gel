import React,{Component} from 'react'; //Importancion de react
import Title from './components/Title/Title'; //importa el componente titulo
import Label from  './components/Label/Label'; //importa el componente label 
import Input from './components/Input/Input';
import './Login.css'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
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

        
                <button className="botoncito" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>

                </div>
           
                </div>
            </div>
        );
       
    }
}

export default Login;

