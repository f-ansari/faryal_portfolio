import React, { useState } from 'react'
import '../style/Project.scss'
import projects from '../assets/projects.json'

function Projects() {

  // const [card, setCard] = useState(false)
  // console.log(card)
  const redirectToRepo = (i) => {
    return window.location.href = `${projects[i].repoURL}`
  }

  const redirectToProject = (i) => {
    return window.location.href = `${projects[i].projectURL}`
  }

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
                <div className="project-box animate__animated animate__slideInUp animate__slower" key={i}>
                  <h4>{project.name}</h4>
                  <img src={project.image} alt={project.name}/>
                
                <div className="button-container">
                  <p className="projects-button" onClick={e => redirectToRepo(i)}>Repo</p>
                  <p className="projects-button" onClick={e => redirectToProject(i)}>Visit Project</p>
                </div>
                </div>
              )
            })
          }

          {/* {
            projects.map((project, i) => {
              return (
                <div className="project-box" key={i} id={i}>
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