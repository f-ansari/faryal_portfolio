import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Nav