import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql } from 'gatsby';
import Avatar from '../images/morocco2.jpg';
import RehypeReact from 'rehype-react';
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
  position: relative;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 767px) {
    width: 100%;
    margin: ${({ theme }) => `${theme.spacing.lg} 0`};
  }
`;

const CtaButton = styled(Button)`
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

const BioWrapper = styled.div`
  max-width: 700px;
`;

const HeroImage = styled.img`
  @media only screen and (max-width: 767px) {
    transform: translateX(220px);
    position: fixed;
    width: 400px;
    height: 100vh;
    top: 0;
    right: 0;
    opacity: 0.08;
  }

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    transform: translateX(220px);
    position: absolute;
    width: 400px;
    height: 627px;
    right: 0;
  }
`;

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    h1: Heading,
    p: Text,
  },
}).Compiler;

const AboutPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      description="Front end engineer aiming to continuously expand his knowledge by collaborating, learning & teaching."
    />
    <ContentWrapper>
      <Content>
        <BioWrapper>
          {renderAst(data.bio.childMarkdownRemark.htmlAst)}

          <Link to="/publications/">
            <CtaButton tabIndex="-1">Check out what I do</CtaButton>
          </Link>
        </BioWrapper>
        <HeroImage src={Avatar} alt="Profile in grayscale" width="400" height="100%" />
      </Content>
    </ContentWrapper>
  </Layout>
);

export default AboutPage;

export const query = graphql`
  query About {
    bio: file(name: { eq: "bio" }) {
      childMarkdownRemark {
        htmlAst
      }
    }
  }
`;
