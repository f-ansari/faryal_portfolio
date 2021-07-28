import React from 'react'
import profilePic from '../assets/faryal_profile_pic.jpg'
 //for test gitHub

function Home(props) {
  return (
    <div className="animate__animated animate__slideInUp animate__slow">

      <div className="home-content">
        <div className="home-text">
          <h3>it's like you are going "far" with the southern "yall"</h3>
          <h1>Faryal Ansari</h1>
          <h2>Let me help you make your dream app to a reality.</h2>
        </div>
        <img className="profile-pic" src={profilePic} alt="Faryal's profile pic"></img>
      </div>

      <div>
        <p className="general-bttn" onClick={() => props.history.push(`/about`)}>Learn More About Me</p>
      </div>
    </div>
  )
}

export default Home