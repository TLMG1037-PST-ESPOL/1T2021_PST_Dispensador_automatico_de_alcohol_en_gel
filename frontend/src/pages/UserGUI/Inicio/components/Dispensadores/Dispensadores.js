import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import {useState} from 'react';

const Dispensadores = () => {

    const [dropdown, setDropdown]= useState(false);


const abrirCerrarDropdown=()=>{
    setDropdown(!dropdown)
}

    return (
        
        <div>
            <div className='dispensadorbox'>

            <Dropdown   isOpen={dropdown} toggle={abrirCerrarDropdown}     >

                <DropdownToggle caret>
                    Dispensadores disponibles
                </DropdownToggle>

                <DropdownMenu>
                    <DropdownItem>  Item 1                  Item disponible
                    </DropdownItem>

                </DropdownMenu>

            </Dropdown>

            </div>
        
            </div>

)}

export default Dispensadores