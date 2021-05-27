import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {

  const toggleNav = () => {
    const navLinks = document.querySelector(".nav-links")
    return navLinks.classList.toggle("open")
  }

  const toggleNavOff = () => {
    const navLinks = document.querySelector(".nav-links")
    return navLinks.classList.remove("open")
  }

  return (
    <header>
      <nav>
        <div className="hamburger" onClick={toggleNav}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="nav-links">
          <NavLink onClick={toggleNavOff} to="/">Home</NavLink>
          <NavLink onClick={toggleNavOff} to="/about">About</NavLink>
          <NavLink onClick={toggleNavOff} to="/projects">Projects</NavLink>
          <NavLink onClick={toggleNavOff} to="/contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Nav