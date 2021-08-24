import React from 'react';
import './Label.css'
const Label=({text})=> {

    return (
        <div>
            <div className='label-container'>
            <label className='label'>
                {text} 
            </label>           
        </div>
    
        </div>
    )


}
export default Label