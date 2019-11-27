import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Text from '../components/Text';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Container from '../components/Container';

const Summary = styled.div`
  flex-grow: 1;

  @media only screen and (max-width: 767px) {
    transform: ${({ theme }) => `translate3d(0, ${theme.spacing.xl}, 0)`};
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
  flex: 0 1 auto;

  @media only screen and (max-width: 767px) {
    position: absolute;
    width: 300px;
    height: 300px;
    top: -9%;
    left: -20%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    width: 275px;
    height: 275px;
    transform: translate3d(-70px, -120px, 0);
    position: absolute;
    right: 0;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1599px) {
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

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <Container contentDirection="row" contentJustification="center">
      <Summary>
        <Heading>
          Aggelos <br /> Arvanitakis
        </Heading>
        <Text limited spaced>
          Front-end engineer specializing in React with a focus on performance. Love huskies, really
          afraid of bees.
          <br />
          <br />
          #react #apollo #redux #webperf
        </Text>
        <Link to="/about">
          <Button tabIndex="-1">Not a bee? Continue</Button>
        </Link>
      </Summary>
      <HeroImgResponsiveWrapper>
        <Img
          style={{ width: '100%', height: '100%' }}
          fixed={props.data.heroImage.childImageSharp.fixed}
          alt="Duotone close-up Portrait"
          loading="eager"
        />
      </HeroImgResponsiveWrapper>
    </Container>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    heroImage: file(relativeDirectory: { eq: "index" }, name: { eq: "hero" }) {
      childImageSharp {
        fixed(quality: 85, width: 550, height: 550, toFormat: JPG) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`;
