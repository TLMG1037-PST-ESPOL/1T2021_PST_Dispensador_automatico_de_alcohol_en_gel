import React from 'react'
import './Contact.css'
const Contact=({text})=> {
    return(
        <div className='title-container'>
            <label className='title-label'>
                {text} 
            </label>           
        </div>
    )

}
export default Contact
