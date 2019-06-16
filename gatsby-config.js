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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#887CFE`,
        theme_color: `#CC26E8`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
