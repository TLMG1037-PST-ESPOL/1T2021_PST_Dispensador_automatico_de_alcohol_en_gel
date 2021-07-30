import React, { Component } from 'react'
import Cookies from 'universal-cookie';

const cookies= new Cookies() 

export default class Inicio extends Component {
    render() {
        console.log(cookies.get('correo_electronico'));
        console.log(cookies.get('nombre_usuario'));
        return (
            <div>
                Inicio de sesion exitoso
            </div>
        )
    }
}