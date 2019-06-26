import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import MagicGrid from 'magic-grid';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Publication from '../components/Publication';
import Text from '../components/Text';
import SEO from '../components/SEO';
import Button from '../components/Button';

const ContentWrapper = styled.div`
  height: 100%;

  @media only screen and (min-width: 1600px) {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
  }
`;

const Section = styled.section`
  margin: ${({ theme }) => `${theme.spacing.xxl} 0`};
`;

const Content = styled.div`
  grid-column: 3/15;
`;

const SectionHeader = styled.header`
  padding: ${({ theme }) => `${theme.spacing.md} 0`};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.lightgrey}`};
`;

const SectionHeading = styled.h2`
  font-size: 3rem;
  font-weight: normal;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 767px) {
  }

  @media only screen and (max-width: 1199px) {
  }

  @media only screen and (max-width: 1599px) {
  }

  @media only screen and (max-width: 1599px) {
  }

  @media only screen and (min-width: 1600px) {
  }
`;

const ListItem = styled.li``;

const PublicationsPage = props => {
  React.useEffect(() => {
    const magicGridOptions = {
      static: true,
      gutter: 20,
      animate: true,
    };

    // Masonry on articles
    new MagicGrid({
      ...magicGridOptions,
      container: '#articles-list',
    }).listen();

    // Masonry on podcasts
    new MagicGrid({
      ...magicGridOptions,
      container: '#podcasts-list',
    }).listen();
  }, []);
  return (
    <Layout>
      <SEO
        title="Publications"
        description="Browse Aggelos Arvanitakis' articles, podcasts & publications"
      />
      <ContentWrapper>
        <Content>
          <Section>
            <SectionHeader>
              <SectionHeading>Articles</SectionHeading>
            </SectionHeader>
            <Text unlimited>
              This is a list of the articles that I've posted over the years. Since early 2019, have
              been trying to post a new article every 10 days, but as you know, sometimes other
              things take precedence. I tend to write from personal experience, both from the
              mistakes that I've done in the past and the things I've learned from working in
              multiple projects
            </Text>
            <List id="articles-list">
              {props.data.articles.edges.map(({ node: { frontmatter: article } }) => (
                <ListItem>
                  <Publication
                    key={article.title}
                    title={article.title}
                    createdAt={article.createdAt}
                    description={article.description}
                    timeInMinutes={article.timeInMinutes}
                    href={article.href}
                    gatsbyImgType="fluid"
                    gatsbyImgData={article.banner.childImageSharp.fluid}
                  />
                </ListItem>
              ))}
            </List>
          </Section>
          <Section>
            <SectionHeader>
              <SectionHeading>Podcasts</SectionHeading>
            </SectionHeader>
            <Text unlimited>
              This is a list of the podcasts that I've recently started working on. The main topics
              I tend to discuss about is tips for large scale projects that mainly utilise React &
              Redux as their libraries of choice. I emphasize on the performance issue snowballing.
            </Text>
            <List id="podcasts-list">
              {props.data.podcasts.edges.map(({ node: { frontmatter: podcast } }) => (
                <ListItem>
                  <Publication
                    key={podcast.title}
                    title={podcast.title}
                    createdAt={podcast.createdAt}
                    description={podcast.description}
                    timeInMinutes={podcast.timeInMinutes}
                    href={podcast.href}
                    gatsbyImgType="fluid"
                    gatsbyImgData={podcast.banner.childImageSharp.fluid}
                  />
                </ListItem>
              ))}
            </List>
          </Section>
        </Content>
      </ContentWrapper>
    </Layout>
  );
};

export default PublicationsPage;

export const query = graphql`
  fragment Asset on MarkdownRemark {
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
      filter: { fileAbsolutePath: { glob: "**/publications/articles/**/index.md" } }
    ) {
      edges {
        node {
          ...Asset
        }
      }
    }
    podcasts: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/publications/podcasts/**/index.md" } }
    ) {
      edges {
        node {
          ...Asset
        }
      }
    }
  }
`;
