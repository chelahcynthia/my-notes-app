import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar'>
        <NavLink to='/'>
            Home
        </NavLink>
        <NavLink to='/noteslist'>
            Notes
        </NavLink>
        <NavLink to='/addnote'>
            New Note
        </NavLink>
    </div>
  )
}

export default NavBar