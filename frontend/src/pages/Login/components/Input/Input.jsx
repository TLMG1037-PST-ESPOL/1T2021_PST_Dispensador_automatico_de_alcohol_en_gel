import React from 'react';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';


const Input=({atribute, handleChange, param})=>{
    return(
        <div>
            <input
            
            id={atribute.id}
            name={atribute.name}
            placeholder={atribute.placeholder}
            type={atribute.type}
            onChange={handleChange}
            className="regular-style"
            />

        </div>

    );
}
export default Input