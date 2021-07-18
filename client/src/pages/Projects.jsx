import React from 'react'
import '../style/Project.scss'
import projects from '../assets/projects.json'

function Projects(props) {
  console.log(projects)
  console.log(props)
  return (
    <div className="project-container">
      <div className="page-title">  
        <h1>Projects</h1>
      </div>

      
      <div className="project-content-container">

        idea: have this card toggle to show more information on card
      {
            projects.map((project) => {
              return (
                <div className="project-box">
                  <h4>{project.name}</h4>
                  <img src={project.image} alt={project.name} />
                </div>
              )
            })
          }

          {
            projects.map((project) => {
              return (
                <div className="project-box">
                  <h4>{project.name}</h4>
                  <img src={project.image} alt={project.name} />
                  <h3>Description: </h3><p>{project.description}</p>
                  <h3>Stack: </h3><p>{project.stack}</p>
                  <h3>Contributers: </h3><p>{project.contributors}</p>
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default Projects