import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import MagicGrid from 'magic-grid';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Publication from '../components/Publication';
import Text from '../components/Text';
import SEO from '../components/SEO';
import Grid from '../components/Grid';
import Column from '../components/Column';
import Section from '../components/Section';

const PublicationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const PublicationsPage = props => {
  const ARTICLES_SECTION_ID = 'articles';
  const PODCASTS_SECTION_ID = 'podcasts';

  React.useEffect(() => {
    const magicGridOptions = {
      static: true,
      gutter: 20,
      animate: true,
    };

    // Masonry on articles
    new MagicGrid({
      ...magicGridOptions,
      container: `#${ARTICLES_SECTION_ID}`,
    }).listen();

    // Masonry on podcasts
    new MagicGrid({
      ...magicGridOptions,
      container: `#${PODCASTS_SECTION_ID}`,
    }).listen();
  }, []);

  const renderPublication = publication => (
    <Publication
      title={publication.title}
      createdAt={publication.createdAt}
      description={publication.description}
      timeInMinutes={publication.timeInMinutes}
      href={publication.href}
      bannerImgData={publication.banner.childImageSharp.fluid}
    />
  );

  return (
    <Layout>
      <SEO
        title="Publications"
        description="Browse Aggelos Arvanitakis' articles, podcasts & publications"
      />
      <Grid>
        <Column centered largeMonitor={12}>
          <Section>
            <Section.Header>
              <Heading size="small">Articles</Heading>
            </Section.Header>
            <Text>
              This is a list of the articles that I've posted over the years. Since early 2019, I
              have been trying to post a new article every 10 days, but as you know, sometimes other
              things take precedence (which is a subtle way of saying that I'm lazy). I tend to
              write from personal experience, both from the mistakes of the past and the things I've
              learned while working in multiple projects.
            </Text>
            <PublicationList id={ARTICLES_SECTION_ID}>
              {props.data.articles.edges.map(({ node: { frontmatter: article } }) => (
                <li key={article.title}>{renderPublication(article)}</li>
              ))}
            </PublicationList>
          </Section>
          <Section>
            <Section.Header>
              <Heading size="small">Podcasts</Heading>
            </Section.Header>
            <Text>
              This is a list of the podcasts that I've recently started working on. I know it's not
              a list if it's only one, but more is coming. The main topics I tend to discuss about
              are tips for large scale projects using React & Redux.
            </Text>
            <PublicationList id={PODCASTS_SECTION_ID}>
              {props.data.podcasts.edges.map(({ node: { frontmatter: podcast } }) => (
                <li key={podcast.title}>{renderPublication(podcast)}</li>
              ))}
            </PublicationList>
          </Section>
        </Column>
      </Grid>
    </Layout>
  );
};

export default PublicationsPage;

export const query = graphql`
  fragment Publication on MarkdownRemark {
    frontmatter {
      banner {
        childImageSharp {
          fluid(quality: 75, maxWidth: 550, toFormat: JPG) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      createdAt
      description
      href
      timeInMinutes
      title
    }
  }

  query {
    articles: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/publications/articles/*/index.md" } }
      sort: { fields: frontmatter___createdAt, order: DESC }
    ) {
      edges {
        node {
          ...Publication
        }
      }
    }
    podcasts: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/publications/podcasts/*/index.md" } }
      sort: { fields: frontmatter___createdAt, order: DESC }
    ) {
      edges {
        node {
          ...Publication
        }
      }
    }
  }
`;
