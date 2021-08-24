import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'bootstrap';
import Title from '../Login/components/Title/Title';
import Medicion from './Medicion/Medicion';
class Dispensador extends Component {





    render() {
      return (
          <div>
             <div className="containerPrincipal">
                <div className="containerSecundario">
                    <div className= "borde_medicion">
                    <Title text="ID: 2709 - vicemora"></Title>
                     <Title text="ID: 2709 - vicemora"></Title> 
                    <Medicion text="190"></Medicion>
                    <h2>El nivel es <var jk>nivel</var> </h2>
                    </div>
          </div>
          </div>
          </div>
        
    );
}}
export default Dispensador