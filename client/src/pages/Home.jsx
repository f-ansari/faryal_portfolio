import React from 'react'
import profilePic from '../assets/faryal_profile_pic.jpg'

function Home() {
  return (
    <div className="home-banner">
      <img className="profile-pic" src={profilePic} alt="Faryal's profile pic"></img>
      <div className="intro-card">
        <h1>Faryal Ansari</h1>
        <p>It's like you are going "far" with the southern "y'all"</p>
      </div>
    </div>
  )
}

export default Home