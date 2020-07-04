import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = ({projects,title,showLink}) => {
  return <section className="section projects">
    <Title title={title} />
    <div className="section-center projects-center">
      {projects.map((project,index)=>{
        return <Project key={project.id} {...project} index={index} slide={index%2===0?'slide-left':'slide-right'} slideImg={index%2!==0?'slide-left':'slide-right'}/>
      })}
    </div>
    {
      showLink && <Link to='/projects' className="btn center-btn">Projects</Link>
    }
  </section>
}

export default Projects
