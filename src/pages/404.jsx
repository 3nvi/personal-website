import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import SEO from '../components/SEO';
import Container from '../components/Container';

const Page404 = props => (
  <Layout>
    <SEO title="Not Found" />
    <div className="flex flex-grow items-center justify-evenly">
      <Heading className="max-lg:border-b-8 max-lg:border-t-8 max-lg:py-8">
        404 <br /> Not found
      </Heading>
      <div className="flex-shrink-0 max-lg:hidden">
        <Img fixed={props.data.heroImage.childImageSharp.fixed} alt="Not Found" />
      </div>
    </div>
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
