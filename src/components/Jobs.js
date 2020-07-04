import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiExperiences(sort: {order: ASC, fields: strapiId}) {
      nodes {
        strapiId
        company
        date
        url
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {

  const data= useStaticQuery(query)
  const {allStrapiExperiences:{nodes:jobs}}=data

  const [value,setValue]=React.useState(0)
  const {company,position,date,desc,url}=jobs[value]
  

  return <section className="section jobs" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">
    <Title title="experience"/>
    <div className="jobs-center">
      <div className="btn-container">
        {jobs.map((item,idx)=>{
          return <button key={item.strapiId} onClick={()=> setValue(idx)} className={`job-btn ${idx===value && 'active-btn'}`}>{item.company}</button>
        })}
      </div>
      <article className="job-info">
        <h3>{position}</h3>
        <h4>{company}</h4>
        {url!== null?<p>Website- <a href={url}>{url}</a></p>:""}
        <p className="job-date">{date}</p>
        {
          desc.map((item)=>{
            return <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{item.name}</p>
            </div>
          })
        }
      </article>
    </div>
    <Link to="/contact" className="btn center-btn">more info</Link>
  </section>
}

export default Jobs
