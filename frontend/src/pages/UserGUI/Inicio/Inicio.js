import React, { Component } from 'react'
import './components/TaskBar/TaskBar.js'
import TaskBar from './components/TaskBar/TaskBar.js'
import Dispensadores from  './components/Dispensadores/Dispensadores.js'
import Cookies from 'universal-cookie';
import axios from "axios"
import { backend } from '../../../App.js'




const cookies= new Cookies() 

export default class Inicio extends Component {

    state = {
        dispensadores: [],
        userName: '',
        userEmail: '',
        userPassword: '',
        idDispensador: ''
    
      }

    

   
      
      async getDispensadores() {
        const res = await axios.get(backend.host + ':' + backend.port + '/dispensador');
        this.setState({ dispensadores: res.data });
        if(cookies.get("nombre_usuario")=="vicemora"){
            this.setState({idDispensador: res.data[0].id_dispensador});
            console.log(this.state.dispensadores)
            console.log(this.state.idDispensador)
        }
        
      }

      async componentDidMount() {
        await this.getDispensadores();
        console.log(this.state.dispensadores);
      }

      

    
    
    render() {
        
        return (
           <div>
                <TaskBar text= "Menu Principal" />
                <div className="containerPrincipal2">
                <div className="conainerSecundario"></div>
                    <Dispensadores text={this.state.idDispensador} path="/2709" />
                </div>
            <script type= "text/javascript">

            </script>
            </div>
            
        )
    }
}
