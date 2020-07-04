import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Blog = ({id,title,image,date,desc,category,slug}) => {
  return <Link to={`/blog/${slug}`} className="blog" key={id}>
    <article>
      <Image fluid={image.childImageSharp.fluid} className="blog-img"/>
      <div className="blog-card">
        <h4>{title}</h4>
        <p>{desc}</p>
        <div className="blog-footer">
          <p>{category}</p>
          <p>{date}</p>
        </div>
      </div>
    </article>
  </Link>
}


export default Blog
