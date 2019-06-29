import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import RehypeReact from 'rehype-react';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Text from '../components/Text';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Container from '../components/Container';
import Column from '../components/Column';
import Grid from '../components/Grid';

const mobileHeadingStyle = css`
  @media only screen and (max-width: 767px) {
    border-bottom: 0.5rem solid;
    border-top: 0.5rem solid;
    padding: 1rem 0;
  }
`;

const HeroImageResponsiveWrapper = styled.div`
  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    transform: translateX(55%);
    position: absolute;
    right: 0;
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    h1: props => <Heading css={mobileHeadingStyle} {...props} />,
    p: props => <Text limited {...props} />,
  },
}).Compiler;

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <Container>
      <Grid>
        <Column mobile={16} tablet={16} computer={14} largeMonitor={10} centered>
          <Container contentDirection="row" contentJustification="space-between">
            <div>
              {renderAst(data.bio.childMarkdownRemark.htmlAst)}
              <Link to="/publications/">
                <Button tabIndex="-1">Still interested?!</Button>
              </Link>
            </div>
            <HeroImageResponsiveWrapper>
              <Img
                fixed={data.heroImage.childImageSharp.fixed}
                alt="Grayscale Portrait in Morocco"
              />
            </HeroImageResponsiveWrapper>
          </Container>
        </Column>
      </Grid>
    </Container>
  </Layout>
);

export default AboutPage;

export const query = graphql`
  query {
    bio: file(relativeDirectory: { eq: "bio" }, name: { eq: "bio" }) {
      childMarkdownRemark {
        htmlAst
      }
    }
    heroImage: file(relativeDirectory: { eq: "bio" }, name: { eq: "hero" }) {
      childImageSharp {
        fixed(quality: 85, width: 400, toFormat: JPG) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`;
