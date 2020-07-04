import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SkillSet from "../components/SkillSet"
import skills from '../constants/skills'
import SEO from '../components/SEO'

let arr=[]
for (let i = 0; i < skills.length; i++) 
  arr.push(<SkillSet sectionTitle={skills[i].domain} skills={skills[i].Particulars}/>)


const query= graphql`
    {
      file(relativePath: {eq: "hero-img.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

const About = () => {
  const {file:{childImageSharp:{fluid}}}= useStaticQuery(query)
  return <Layout>
    <SEO title="About Me" />
    <section className="about-page">
      <div className="section-center about-center">
        <Image fluid={fluid} className="about-img"/>
        <article className="about-text">
          <Title title="About Me" />
          <p>I am a Full Stack developer based in New Delhi, India. Right now I am pursuing BCA from Guru Gobind Singh Indraprastha University. I am actively looking for opportunities that will help me in growing/building my tech stack.<br/><br/>I am still a learner who still needs to learn lot of cool things. Please ping me up if you have anything interesting or want to share a powerful framework, a useful library, some css-tricks or memes  ✌.<br/>I love to code, watch football and travel. Here's a {'😄'} if you were missing on it today.</p>
        </article>
      </div>
    </section>
    <section className="skill-set">
      <div className="section-center">
        <Title title="SKILL SETS" />
          {arr}
      </div>
    </section>
  </Layout>
}

export default About
