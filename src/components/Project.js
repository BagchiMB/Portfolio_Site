import React from "react"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({desc,title,github,stack,url,image,index,slide,slideImg}) => {
  return <article className="project">
    <div data-sal={slideImg} className="project-img project-img-wrapper">{<Image fluid={image.childImageSharp.fluid} className="project-img" />}</div>
    <div className="project-info" data-sal={slide} data-sal-duration={800}>
      <span className="project-number">0{index+1}.</span>
      <h3>{title}</h3>
      <p className="project-desc">{desc}</p>
      <div className="project-stack">
        {stack.map((item)=>{
          return <span key={item.id}>{item.title}</span>
        })}
      </div>
      <div className="project-links">
        <a target="_blank" rel="noopener noreferrer" href={github}><FaGithubSquare className="project-icon"/></a>
        {url!==null?<a target="_blank" rel="noopener noreferrer" href={url}><FaShareSquare className="project-icon"/></a>:''}
      </div>
    </div>
  </article>
}

export default Project
