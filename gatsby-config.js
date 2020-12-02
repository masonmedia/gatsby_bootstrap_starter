/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Gatsby Bootstrap Starter'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: `${__dirname}/src/pages/`,
        },
      },
      { resolve: `gatsby-source-filesystem`, 
      options: { 
        path: `./src/images/`, 
        } 
      },

      // {
      //   resolve: `gatsby-source-filesystem`,
      //   options: {
      //     name: 'images',
      //     path: `${__dirname}/src/images`,
      //   },
      // },
  ],
}
