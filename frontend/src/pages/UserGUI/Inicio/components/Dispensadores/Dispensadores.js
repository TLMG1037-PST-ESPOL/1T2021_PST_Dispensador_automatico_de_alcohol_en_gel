import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import {useState} from 'react';

const Dispensadores = ({text,path}) => {

    const [dropdown, setDropdown]= useState(false);


const abrirCerrarDropdown=()=>{
    setDropdown(!dropdown)
}

    

    return (
        
        <div>
            <div className='dispensadorbox'>
            
            <Dropdown   isOpen={dropdown} toggle={abrirCerrarDropdown}     >

                <DropdownToggle caret>
                    Dispositivos
                </DropdownToggle >

                <DropdownMenu>
                    <DropdownItem><header>Dispensadores registrados</header> 
                    </DropdownItem>
                    <DropdownItem href={path}> {text}
                    </DropdownItem>

                </DropdownMenu>

            </Dropdown>

            </div>
        
            </div>

)}

export default Dispensadores