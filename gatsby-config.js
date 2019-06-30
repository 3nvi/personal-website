module.exports = {
  siteMetadata: {
    title: 'Aggelos Arvanitakis',
    description:
      'Front end engineer aiming to continuously expand his knowledge by collaborating, learning & teaching. I know & teach React, Svelte, Redux, Apollo, Webperf',
    image: `/img/main.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://fonts.gstatic.com'],
      },
    },
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
        description: `Personal website of Aggelos Arvanitakis showcasing related work`,
        start_url: `/`,
        lang: `en-US`,
        background_color: `#887CFE`,
        theme_color: `#CC26E8`,
        display: `standalone`,
        icon: `static/img/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-143018507-1',
        head: true,
        anonymize: true,
        respectDNT: false,
      },
    },
  ],
};
