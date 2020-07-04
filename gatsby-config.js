/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Mihir Bagchi | Fullstack Web Developer | Portfolio",
    description: "Hi my name is Mihir and I am a Full Stack Web developer based in New Delhi, India. Right now I am pursuing BCA from Guru Gobind Singh Indraprastha University. I am actively looking for opportunities that will help me in growing/building my tech stack. Please take a look at my work or get in touch ! ",
    author: "@Mihir",
    twitterUsername: "@bagchi_mihir",
    image: "/Mihir.png",
    siteUrl: "https://www.mihirbagchi.com",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        //   contentTypes : `jobs`, `projects`, `blogs`,
        //   singleType : `about`
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        contentTypes: [`Experiences`,`Projects`,`Blogs`],
        singleTypes: [],
      },
    },
    {
      resolve:`gatsby-plugin-scroll-reveal`,
      options:{
        threshold: 0.2,
        once:true,
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/fave.png",
  
        // WebApp Manifest Configuration
        appName: 'Mihir Bagchi | Fullstack Web Developer | Portfolio', // Inferred with your package.json
        appDescription: null,
        developerName: 'Mihir Bagchi',
        developerURL: 'https://mihirbagchi.com',
        dir: 'auto',
        lang: 'en-US',
        background: 'hsl(185, 57%, 50%)',
        theme_color: 'hsl(185, 57%, 50%)',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',
  
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false
        }
      }
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Roboto`,
    //         variants: [`400`, `700`],
    //       },
    //       {
    //         family: `Open Sans`,
    //       },
    //     ],
    //   },
    // },
  ],
}
