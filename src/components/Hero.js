import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Typewriter from 'typewriter-effect';
import SocialLinks from "../constants/socialLinks"
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

const Hero = () => {
  const {file:{childImageSharp:{fluid}}}= useStaticQuery(query)

  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info" data-sal="slide-up" data-sal-duration="1500" data-sal-easing="ease-out">
        <div>
          <div className="underline"></div>
          <h1 className="hero-info-h1">i'm Mihir</h1>
          <h4>I am a <Typewriter options={{deleteSpeed:50,delay:80,strings:['Full stack Web Developer', 'Web Scrapper', 'Data Science Enthusiast'],autoStart:true,loop:true}} /></h4>
          <Link to='/about' className='btn'>
            About me
          </Link>
          <SocialLinks />
        </div>
      </article>
      <div className="hero-img" data-sal='slide-down' data-sal-duration="1500" data-sal-easing="ease-out">
        <Image fluid={fluid} className="hero-img"/>
      </div>
    </div>
  </header>
}

export default Hero
