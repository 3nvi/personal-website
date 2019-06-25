import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
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

const HeroImageResponsiveWrapper = styled.div`
  @media only screen and (max-width: 767px) {
    transform: translateX(55%);
    position: fixed;
    width: 66vh;
    height: 100vh;
    top: 0;
    right: 0;
    opacity: 0.05;
    z-index: -1;

    .gatsby-image-wrapper {
      width: 100% !important;
      height: 100% !important;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    transform: translateX(55%);
    position: absolute;
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
        <HeroImageResponsiveWrapper>
          <Img fixed={data.heroImage.childImageSharp.fixed} alt="Grayscale Portrait in Morocco" />
        </HeroImageResponsiveWrapper>
      </Content>
    </ContentWrapper>
  </Layout>
);

export default AboutPage;

export const query = graphql`
  query {
    bio: file(name: { eq: "bio" }) {
      childMarkdownRemark {
        htmlAst
      }
    }
    heroImage: file(name: { eq: "morocco" }) {
      childImageSharp {
        fixed(quality: 85, width: 400, toFormat: JPG) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`;
