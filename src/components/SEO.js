import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const SEO = ({title,description,Img}) => {
  const {site}= useStaticQuery(query)
  const {siteDesc,image,siteUrl,siteTitle,twitterUsername}=site.siteMetadata
  return <Helmet htmlAttributes={{lang:"en"}} title={`${title} | ${siteTitle}`}>
    <meta name='description' content={description || siteDesc} />
    <meta name="image" content={image} />
    <meta  name="twitter:card" content="summary_large_image" />
    <meta  name="twitter:creator" content={twitterUsername} />
    <meta  name="twitter:title" content={`${title} | ${siteTitle}`} />
    <meta  name="twitter:description" content={description || siteDesc} />
    <meta  name="twitter:image" content={`${siteUrl}${Img===undefined?image:Img}`} />

    <meta property="og:title" content={`${title} | ${siteTitle}`} />
    <meta property="og:description" content={description || siteDesc} />
    <meta property="og:image" content={`${siteUrl}${Img===undefined?image:Img}`} />
    <meta property="og:type" content="blog" />

  </Helmet>
}

export default SEO
