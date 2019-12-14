require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `The Full Monty`,
    titleTemplate: '%s - The Full Monty',
    description: `A simple dog-tastic Gatsby starter containing some simple bootsrap components - ready to be used with Contentful.`,
    author: `Stuart Mackenzie`,
    url: `https://disco-full-monty.netlify.com`, // No trailing slash allowed!
    image: '/images/dog-icon.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@_disco',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Full Monty`,
        short_name: `full-monty`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0073e6`,
        display: `minimal-ui`,
        icon: `src/images/dog-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
