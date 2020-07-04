import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"


const contact = () => {
  return <Layout>
    <SEO title="Projects" />
    <section className="contact-page">
      <article className="contact-form">
        <h3>get in touch</h3>
        <form action="https://formspree.io/xvowbrpo" method="POST">
          <div className="form-group">
            <input type="text" placeholder="name" className="form-control" name="name"/>
            <input type="email" placeholder="email" className="form-control" name="email" />
            <textarea name="message" rows="5" placeholder="message" className="form-control"/>
          </div>
          <button type="submit" className="submit-btn btn">Submit here</button>
        </form>
      </article>
    </section>
  </Layout>
}

export default contact
