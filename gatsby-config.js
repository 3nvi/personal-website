module.exports = {
  siteMetadata: {
    title: 'Aggelos Arvanitakis',
    description: 'Personal website of Aggelos Arvanitakis showcasing work & contributions',
    image: '',
    mediumHandle: `aggelosarvanitakis`,
    twitterHandle: `aggarvanitakis`,
    githubHandle: `3nvi`,
    linkedinHandle: `aggelos-arvanitakis-42121664`,
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
        name: `data`,
        path: `${__dirname}/src/data`,
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
