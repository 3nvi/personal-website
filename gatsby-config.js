module.exports = {
  siteMetadata: {
    title: 'Aggelos Arvanitakis',
    description:
      'Front end engineer aiming to continuously expand his knowledge by collaborating, learning & teaching. I know & teach React, Svelte, Redux, Apollo, Webperf',
    image: `static/main.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aggelos Arvanitakis | Personal Website`,
        short_name: `Aggelos Arvanitakis`,
        start_url: `/`,
        background_color: `#887CFE`,
        theme_color: `#CC26E8`,
        display: `minimal-ui`,
        icon: `static/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
