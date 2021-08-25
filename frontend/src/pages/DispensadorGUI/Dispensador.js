import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from '../Login/components/Title/Title';
import Medicion from './Medicion/Medicion';
import axios from "axios"
import { backend } from '../../App.js'
import swal from 'sweetalert'


class Dispensador extends Component {

    //seteando estados para controlar variables 
    state = {
        dispensadores: [],
        numero_de_usos: '',
        estado: ''
    }
    // Obtiene los dispensadores del backend
    async getDispensadores() {
        const res = await axios.get(backend.host + ':' + backend.port + '/dispensador');
        this.setState({ dispensadores: res.data });
        this.setState({numero_de_usos: res.data[0].no_usos});
        if(res.data[0].nivel_bajo){
            this.setState({estado: "Nivel bajo"});
            swal({title: "Se ha detectado un nivel bajo",text: "Hemos detectado un nivel bajo del acohol, por favor, llena la botella"
                  ,icon: "warning",button: "Lo haré",})
        }else{
            this.setState({estado: "Normal"});
        }
    }
    //obteniendo los dispensadores
    async componentDidMount() {
    await this.getDispensadores();
    console.log(this.state.dispensadores);
    }

      




    render() {
      return (
          <div>
             <div className="containerPrincipal">
                <div className="containerSecundario">
                    <div className= "borde_medicion">
                    <Title text="ID: 2709 - vicemora"></Title>
                    <h2>Numero de usos </h2>
                    <Medicion text={this.state.numero_de_usos}></Medicion>
                    <h2>El nivel es: {this.state.estado} </h2>
                    </div>
          </div>
          </div>
          </div>
        
    );
}}
export default Dispensador