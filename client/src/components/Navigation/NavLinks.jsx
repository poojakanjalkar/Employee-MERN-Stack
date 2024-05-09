import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavLink.css'

export default function NavLinks(props) {
  return <ul className='nav-links'>
    <li>
      <NavLink to='/home' exact>Home</NavLink>
    </li>
    <li>
      <NavLink to='/Employee-List'>Employee List</NavLink>
    </li>
  </ul>


}
