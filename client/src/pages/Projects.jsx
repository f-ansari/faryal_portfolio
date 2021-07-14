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
          {/* <h4>{projects[0].name}</h4>
          <img src={projects[0].image} alt="" /> */}
          {
            projects.map((project) => {
              return (
                <div className="project-box">
                  <h4>{project.name}</h4>
                  <img width="300vw" src={project.image} alt={project.name} />
                  <h3>Description: </h3><p>{project.description}</p>
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default Projects