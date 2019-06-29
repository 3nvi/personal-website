import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import SEO from '../components/SEO';
import Container from '../components/Container';

const mobileAndTabletHeadingStyle = css`
  @media only screen and (max-width: 1199px) {
    border-bottom: 0.5rem solid;
    border-top: 0.5rem solid;
    padding: 2rem 0;
  }
`;

const ResponsiveImgWrapper = styled.div`
  flex-shrink: 0;

  @media only screen and (max-width: 1199px) {
    display: none;
  }
`;

const Page404 = props => (
  <Layout>
    <SEO title="Not Found" />
    <Container contentDirection="row" contentJustification="space-evenly">
      <Heading css={mobileAndTabletHeadingStyle}>
        404 <br /> Not found
      </Heading>
      <ResponsiveImgWrapper>
        <Img fixed={props.data.heroImage.childImageSharp.fixed} alt="Duotone close-up Portrait" />
      </ResponsiveImgWrapper>
    </Container>
  </Layout>
);

export default Page404;

export const query = graphql`
  query {
    heroImage: file(relativeDirectory: { eq: "404" }, name: { eq: "hero" }) {
      childImageSharp {
        fixed(quality: 85, width: 400, height: 400, toFormat: JPG) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`;
