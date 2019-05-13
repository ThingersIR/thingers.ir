require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Thingers.ir`,
    description: `معرفی استارتاپ‌های فعال ایران در حوزه اینترنت اشیا(چیزها)`,
    siteUrl: 'https://thingers.ir',
    author: `@truemoein`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Thingers.ir`,
        short_name: `Thingers`,
        start_url: `/`,
        background_color: `#EFAB48`,
        theme_color: `#4DD0E2`,
        display: `standalone`,
        icon: `src/images/ThingersLogo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `55xbco9h9xme`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
