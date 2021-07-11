import React from 'react'
import '../style/About.scss'
import Skills from '../components/Skills'


function About() {
  return (
    <div className="about-container">
      <div className="page-title">
        <h1>About</h1>
      </div>
      <div className="about-content-container">
        <div className="about-box">
          <h3>Who am I</h3>
          <p>I am a FullStack Software Engineer aiming for a rich and functional User Experience. Currently, I manage a tourism business, which made me realize what people need digitally in this industry, guiding me to the world of coding. With an artistic background and a love for beautiful, functional design, my goal is to tie the clean, attractive UI with a complex codebase.</p>
        </div>

        <div className="about-box">
          <h3>Fun Facts</h3>
          <p>
            😄 Pronouns: She/Her<br></br>
            👩‍💻 I’m looking for a job as a Software Engineer<br></br>
            🌱 I’m currently learning Python/ TypeScript<br></br>
            🤔 I’m looking for help with error handling<br></br>
            🔭 I’m currently working on Portfolio<br></br>
            💬 Ask me about anything! I like talking<br></br>
            ⚡  Coffee fanatic and love IronMan<br></br>
          </p>
        </div>
      </div>

      <div className="about-content-container">
        <Skills />
      </div>

      <div>
        <p className="general-bttn" onClick={() => window.location.href = "https://github.com/f-ansari" }>Visit My Github</p>
      </div>
    </div>
  )
}

export default About