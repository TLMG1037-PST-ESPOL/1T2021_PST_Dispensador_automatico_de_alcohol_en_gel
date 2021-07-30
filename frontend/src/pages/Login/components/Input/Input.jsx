import React from 'react';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Input.css'


const Input=({atribute, handleChange, param})=>{
    return(
        <div>
            <input className="text_field"
            
            id={atribute.id}
            name={atribute.name}
            placeholder={atribute.placeholder}
            type={atribute.type}
            onChange={handleChange}

            />

        </div>

    );
}
export default Input