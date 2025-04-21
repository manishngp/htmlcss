import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
        <div>LOGO</div>
        <div>
          <NavLink to="/">Home</NavLink>  
          <NavLink to="/about">About</NavLink>  
          
        </div>
    </div>

  )
}
export default Navbar