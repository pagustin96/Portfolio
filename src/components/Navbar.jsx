import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'


export const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='logo-container'>
        <p className='navbar-logo-nombre'>Agustin</p> <p className='navbar-logo-apellido'> Sanchez</p><p className='navbar-logo-punto'>.</p><p className='navbar-logo-punto'>_</p>  
      </div>
      <div className='selector-container'>
        <NavLink to='/'><div className='selector-inner'>home</div></NavLink>
        <NavLink to='/about'><div className='selector-inner'>sobre mi</div></NavLink>
        <div className='selector-inner'>experiencia</div>
        <div className='selector-inner'>contacto</div>
      </div>
      <div className='contacto-container'>
        <button className='btn-contacto-navbar'>
          <b>Contactame!</b>
        </button>
      </div>
    </div>
   
  )
}
