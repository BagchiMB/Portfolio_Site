import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from '../components/SEO'

export default ({data}) => {
  const {allStrapiProjects:{nodes:projects},allStrapiBlogs:{nodes:blogs}} = data

  return <Layout>
    <SEO 
      title="Home" />
    <Hero />
    <Services />
    <Jobs />
    <Projects projects={projects} title="Featured Projects" showLink/>
    <Blogs blogs={blogs} title="Latest Blogs" showLink />
  </Layout>
}
export const query = graphql`
  {
    allStrapiProjects(sort: {order: DESC, fields: id}, filter: {featured: {eq: true}}) {
      nodes {
        desc
        featured
        github
        id
        title
        url
        stack {
          id
          title
        }
        image:Image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid  
            }
          }
        }
      }
    }
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        content
        category
        date(formatString: "MMM Do, YYYY")
        desc
        title
        id
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid 
            }
          }
        }
      }
    }
  }
`
