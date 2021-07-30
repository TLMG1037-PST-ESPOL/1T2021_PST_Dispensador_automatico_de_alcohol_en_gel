import React, { Component } from 'react'
import './components/TaskBar/TaskBar.js'
import TaskBar from './components/TaskBar/TaskBar.js'

/*import Cookies from 'universal-cookie';

const cookies= new Cookies() */

export default class Inicio extends Component {
    render() {
        //console.log(cookies.get('usuario:'+nombre_usuario));
        return (
            <div>
                <TaskBar/>
            </div>
        )
    }
}