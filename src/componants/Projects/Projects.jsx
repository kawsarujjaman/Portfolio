import React from 'react'
import ProjectCard from '../Projects/ProjectCard';


const Projects = () => {
  return (
    <div id='Project' className='p-10 md:p-24'>
        <h1 className="text-white text-2xl md:text-4xl font-bold">Projects</h1>

        <div className="py-12 px-8 flex flex-wrap gap-5 justify-center">
        <ProjectCard 
          title="Blogging Website"
          main="This is a blogging website created in NextJs and used some componants library."  />    

        <ProjectCard 
          title="Youtube Website"
          main="This is a blogging website created in NextJs and used some componants library."  /> 

          <ProjectCard 
          title="NetFlix Website"
          main="This is a blogging website created in NextJs and used some componants library."  /> 
        </div>
        
    </div>
  )
}

export default Projects