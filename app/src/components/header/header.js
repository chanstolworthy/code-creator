import React from 'react'
import './header.css'
import LOGO from './images/locked.svg'

export default function(){
    return(
        <div className='header-body'>
            <div className='header-main-logo-container'>
                <img src={LOGO} alt='' className='header-main-logo'/>
                <div>CodeCrypt</div>
            </div>

            <div>
                
            </div>
        </div>
    )
}
// #38FF9C