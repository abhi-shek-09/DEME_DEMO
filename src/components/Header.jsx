import React from 'react'
import './header.css'
const Header = (props) => {
  return (
    <div>
        <div className='header__image'>
            <img src={props.img} alt='girl pic'/>
        </div>
    </div>
  )
}

export default Header