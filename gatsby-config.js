module.exports = {
  siteMetadata: {
    title: 'Aggelos Arvanitakis',
    description:
      'Front end engineer aiming to continuously expand his knowledge by collaborating, learning & teaching. I know & teach React, Svelte, Redux, Apollo, Webperf',
    image: `/img/main.jpg`,
    logo: `/img/favicon.png`,
    siteUrl: `https://aggelos.dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
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
        trackingId: process.env.GA_TRACKING_ID,
        head: true,
        anonymize: true,
        respectDNT: false,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return {
                  title: edge.node.frontmatter.title,
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.createdAt,
                  url: edge.node.frontmatter.href,
                  guid: edge.node.frontmatter.href,
                  custom_elements: [{ readingTime: edge.node.frontmatter.timeInMinutes }],
                };
              });
            },
            query: `
              {
                allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___createdAt]}, filter: {fileAbsolutePath: {, regex: "data/publications/"}}) {
                  edges {
                    node {
                      frontmatter {
                        title
                        description
                        href
                        timeInMinutes
                        createdAt
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Aggelos Arvanitakis RSS Feed',
          },
        ],
      },
    },
  ],
};
