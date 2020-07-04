import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/SEO"

const Error = () => {
  return <Layout>
    <main className="error-page">
      <div className="error-container">
      <img src="https://media1.tenor.com/images/d595217b8dd7ba5c049f1125f36c270c/tenor.gif?itemid=17239646" alt="Wrong page" /><br /><br />
      <Link to='/' className="btn">Back Home</Link>
      </div>
    </main>
  </Layout>
}

export default Error
