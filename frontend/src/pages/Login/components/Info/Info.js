import React from 'react'
import './Info.css'
const Info=({text})=> {
    return(
        <div className='Info'>
            <label className='title-label'>
                {text} 
            </label>           
        </div>
    )

}
export default Info