import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Text from '../components/Text';
import SEO from '../components/SEO';
import Button from '../components/Button';

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  @media only screen and (max-width: 767px) {
    transform: ${({ theme }) => `translate3d(0, ${theme.spacing.xxl}, 0)`};
  }

  @media only screen and (min-width: 1200px) and (max-width: 1599px) {
    transform: translateX(100px);
  }

  @media only screen and (min-width: 1600px) {
    transform: translateX(150px);
  }
`;

const HeroImgResponsiveWrapper = styled.div`
  z-index: -1;
  flex: 1 0 auto;

  @media only screen and (max-width: 767px) {
    position: absolute;
    width: 300px;
    height: 300px;
    top: -5%;
    left: -20%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    width: 275px;
    height: 275px;
    transform: translate3d(-70px, -120px, 0);
    position: absolute;
    right: 0;
  }

  @media only screen and (min-width: 1200px) {
    width: 400px;
    height: 400px;
    transform: translateX(-100px);
  }

  @media only screen and (min-width: 1600px) {
    width: 550px;
    height: 550px;
    transform: translateX(-150px);
  }
`;

const CtaButton = styled(Button)`
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

const IndexPage = props => (
  <Layout>
    <SEO
      title="Home"
      description="Front end engineer aiming to continuously expand his knowledge by collaborating, learning & teaching."
    />
    <ContentWrapper>
      <Content>
        <Heading>Aggelos Arvanitakis</Heading>
        <Text
          spaced
          dangerouslySetInnerHTML={{ __html: props.data.statement.childMarkdownRemark.html }}
        />

        <Link to="/about">
          <CtaButton tabIndex="-1">Learn more</CtaButton>
        </Link>
      </Content>
      <HeroImgResponsiveWrapper>
        <Img
          style={{ width: '100%', height: '100%' }}
          fixed={props.data.heroImage.childImageSharp.fixed}
          alt="Duotone close-up Portrait"
        />
      </HeroImgResponsiveWrapper>
    </ContentWrapper>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    statement: file(relativeDirectory: { eq: "index" }, name: { eq: "statement" }) {
      childMarkdownRemark {
        html
      }
    }
    heroImage: file(relativeDirectory: { eq: "index" }, name: { eq: "hero" }) {
      childImageSharp {
        fixed(quality: 85, width: 550, height: 550, toFormat: JPG) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`;
