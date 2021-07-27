import React from 'react'
import '../style/Contact.scss'
import LinkedInQR from '../assets/linkedin_QR.jpg'
import TwitterQR from '../assets/twitter_QR.PNG'

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <div className="contact-card-container">
        <p>I would love to connect with you! <br/> Here is how you can reach me</p>
        <div className="card">
            <div className="socials social-content">
              <h2><a href="https://www.linkedin.com/in/faryal-a-43505b154/">LinkedIn</a></h2>
              <h4>OR</h4>
              <p>Scan my QR to use another device</p>
              <img src={LinkedInQR} alt="Faryal's LinkedIn QR code"/>
            </div>

            <div className="socials">
              <h2><a href="https://twitter.com/simplyfaryal">Twitter</a></h2>
              <h4>OR</h4>
              <p>Scan my QR to use another device</p>
              <img src={TwitterQR} alt="Faryal's LinkedIn QR code"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact