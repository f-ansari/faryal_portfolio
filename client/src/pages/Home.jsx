import React from 'react'
import profilePic from '../assets/faryal_profile_pic.jpg'
import Skills from '../components/Skills'
import { NavLink } from 'react-router-dom'


function Home() {
  return (
    <div>
      <div className="home-banner">
        <img className="profile-pic" src={profilePic} alt="Faryal's profile pic"></img>
        <div className="intro-card">
          <h1>Faryal Ansari</h1>
          <p>It's like you are going "far" with the southern "y'all"</p>
        </div>
      </div>

      <div>
        <Skills />
      </div>
      <div className="general-bttn">
        <NavLink to="/about">Learn More about me</NavLink>
      </div>
    </div>
  )
}

export default Home