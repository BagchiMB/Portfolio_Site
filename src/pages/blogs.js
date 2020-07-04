import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

const Blog = ({data:{allStrapiBlogs:{nodes:blogs}}}) => {
  return <Layout>
    <SEO title="Blogs" />
    <section className="blog-page">
      <Blogs blogs={blogs} title="All Blogs" />
    </section>
  </Layout>
}

export const query = graphql`
  {
    allStrapiBlogs(sort: {fields: date, order: DESC}) {
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

export default Blog
