import React from 'react'
import skills from '../assets/skills.json'


const Skills = () => {
    // console.log (skills)
    return (
        <div className='skills-container'>

        {
            skills.map(skill => {
                // console.log(skill.image)
               return <img src={skill.image} alt={skill.description}></img>
            }) 
        }
        </div>
    )
}

export default Skills