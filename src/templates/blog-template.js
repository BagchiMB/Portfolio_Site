import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from '../components/SEO'
import Blogs from "../components/Blogs"


const ComponentName = ({data}) => {
  const {content,title,desc,image}=data.blog
  const {nodes}=data.allStrapiBlogs


  return <Layout>
    <SEO title={title} description={desc} Img={image.childImageSharp.fluid.src}/>
    <section className="blog-template">
      <div className="section-center">
        <article className="blog-content">
          <ReactMarkdown source={content} />
        </article>
        <Link to="/blog" className="btn center-btn">All blogs {`<--`}</Link>
      </div>
    </section>
    <Blogs blogs={nodes} title="Latest Blogs" showLink />
  </Layout>
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid 
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

export default ComponentName
