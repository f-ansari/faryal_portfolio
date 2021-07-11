import React from 'react'
import skills from '../assets/skills.json'


const Skills = () => {
    return (
    <div className="skills-component">
        <h1>The Fun Stuff... Skills I Know</h1>
        <h3>Scroll left to view all skills</h3>
        <div className='skills-container'>
        {
            skills.map(skill => {
                return <img className="skills-img" src={skill.image} alt={skill.description}></img>
            }) 
        }
        </div>
    </div>
    )
}

export default Skills