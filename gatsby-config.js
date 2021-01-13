module.exports = {
  siteMetadata: {
    title: `Full Service Creative`,
    description: `Doing Full Service Fabrication for artists`,
    author: `nickk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work`,
        path: `${__dirname}/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Full Service Creative`,
        short_name: `Full Service`,
        start_url: `/`,
        background_color: `#001e82`,
        theme_color: `#001e82`,
        display: `minimal-ui`,
        icon: `src/images/eye.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-transformer-json",
    "gatsby-plugin-transition-link",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  // pathPrefix: "/elijah-ford",
}
