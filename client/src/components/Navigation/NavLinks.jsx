import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavLink.css'

export default function NavLinks(props) {
  return <ul className='nav-links'>
    <li>
      <NavLink to='/home'>Home</NavLink>
    </li>
    <li>
      <NavLink to='/home/employee'>Employee List</NavLink>
    </li>
  </ul>


}
