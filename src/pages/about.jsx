import React from 'react';
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

const HeadingWithMobileStyle = props => (
  <Heading className="border-solid border-black max-md:border-y-8 max-md:py-4" {...props} />
);

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    h1: HeadingWithMobileStyle,
    p: props => <Text limited {...props} />,
  },
}).Compiler;

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <div className="flex flex-grow mx-auto md:max-lg:m-0 px-4">
      <div className="flex justify-center gap-16 items-center">
        <div>
          {renderAst(data.bio.childMarkdownRemark.htmlAst)}
          <Link to="/publications">
            <Button tabIndex="-1">Still interested?!</Button>
          </Link>
        </div>
        <div className="md:max-lg:translate-x-[55%] md:max-lg:absolute md:max-lg:right-0 max-md:hidden">
          <Img fixed={data.heroImage.childImageSharp.fixed} alt="Grayscale Portrait in Morocco" />
        </div>
      </div>
    </div>
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
