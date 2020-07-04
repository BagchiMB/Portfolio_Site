import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from '../components/SEO'

export const query = graphql`
  {
    allStrapiProjects(sort: {order: DESC, fields: id}) {
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
  }
`

const ProjectsPage = ({data:{allStrapiProjects:{nodes:projects}}}) => {
  return <Layout>
    <SEO title="Projects" />
    <section className="projects-page">
      <Projects projects={projects} title="All projects" />
    </section>
  </Layout>
}

export default ProjectsPage
