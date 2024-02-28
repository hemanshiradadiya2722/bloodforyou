import React from 'react'
import logo from '../image/images/logo (2).jpg'; 

function MenuHeader() {
    return (
       <div className='menu_header_main'>
         <div className='container menu_header'>
            <div className='d-flex space-between'>
                <div>
                    <img src={logo} alt="Logo" ></img>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
       </div>
    )
}

export default MenuHeader