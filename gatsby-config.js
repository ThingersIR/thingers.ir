require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Thingers.ir`,
    description: `معرفی استارتاپ‌های فعال ایران در حوزه اینترنت اشیا(چیزها)`,
    siteUrl: 'https://thingers.ir',
    author: `@truemoein`,
  },
  plugins: [
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#4DD0E2`,
        showSpinner: true,
      },
    },
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
        icon: `src/images/ThingersLogo.png`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `55xbco9h9xme`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
