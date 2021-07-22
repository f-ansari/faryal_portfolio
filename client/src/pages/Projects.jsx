import React from 'react'
import '../style/Project.scss'
import projects from '../assets/projects.json'

function Projects() {

// install npm install react-flippy

  return (
    <div className="project-container">
      <div className="page-title">  
        <h1>Projects</h1>
      </div>

      
      <div className="project-content-container">

        {/* idea: refer to memonry game*/}
      {
            projects.map((project, i) => {
              return (
                <div className="project-box" onMouseOver={e => handleMouseOver(i)} key={i}>
                  <h4>{project.name}</h4>
                  <img src={project.image} alt={project.name} />
                </div>
              )
            })
          }

          {/* {
            projects.map((project, i) => {
              return (
                <div className="project-box" key={i}>
                  <h4>{project.name}</h4>
                  <img src={project.image} alt={project.name} />
                  <h3>Description: </h3><p>{project.description}</p>
                  <h3>Stack: </h3><p>{project.stack}</p>
                  <h3>Contributers: </h3><p>{project.contributors}</p>
                </div>
              )
            })
          } */}
      </div>
    </div>
  )
}

export default Projects