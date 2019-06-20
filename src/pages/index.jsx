import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import heroImageSrc from '../images/hero.jpg';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Button from '../components/Button';

const MainHeading = styled.h1`
  font-family: 'Playfair Display', 'FuturaNew', sans-serif;
  font-size: 4rem;

  @media only screen and (min-width: 768px) {
    font-size: 6.5rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 8rem;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 10rem;
  }
`;

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
`;

const Description = styled.p`
  letter-spacing: 0.15rem;
  line-height: 1.5rem;
  max-width: 600px;
  margin: ${({ theme }) => `${theme.spacing.md} 0`};
  color: ${({ theme }) => theme.colors.grey};

  @media only screen and (max-width: 767px) {
    letter-spacing: 0.1rem;
  }
`;

const HeroImage = styled.img`
  object-fit: contain;
  z-index: -1;

  @media only screen and (max-width: 767px) {
    width: 300px;
    height: 300px;
    position: absolute;
    top: -5%;
    left: -20%;
  }

  @media only screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
    transform: translateX(-50px);
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

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Front end engineer aiming to continuously expand his knowledge by collaborating, learning & teaching."
    />
    <ContentWrapper>
      <Content>
        <MainHeading>
          Aggelos <br /> Arvanitakis
        </MainHeading>
        <Description>
          Front end engineer specializing in React with a focus on performance. Love huskies, really
          afraid of bees.
          <br />
          <br />
          #react #apollo #redux #webperf
        </Description>
        <Link to="/about">
          <CtaButton tabIndex="-1">Learn more</CtaButton>
        </Link>
      </Content>
      <HeroImage src={heroImageSrc} alt="Portrait picture" />
    </ContentWrapper>
  </Layout>
);

export default IndexPage;
