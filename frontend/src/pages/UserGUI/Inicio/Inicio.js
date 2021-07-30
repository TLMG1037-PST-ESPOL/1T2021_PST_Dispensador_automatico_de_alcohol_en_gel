import React, { Component } from 'react'
import './components/TaskBar/TaskBar.js'
import TaskBar from './components/TaskBar/TaskBar.js'

import Cookies from 'universal-cookie';


const cookies= new Cookies() 

export default class Inicio extends Component {

    render() {
        console.log(cookies.get('correo_electronico'));
        console.log(cookies.get('nombre_usuario'));
        return (
            <div>
                <TaskBar text= "Menu Principal" />
            </div>
        )
    }
}