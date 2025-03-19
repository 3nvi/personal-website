import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Text from '../components/Text';
import SEO from '../components/SEO';
import Button from '../components/Button';

const IndexPage = props => (
  <Layout>
    <SEO title="Front-end Developer" />
    <div className="flex justify-center items-center flex-grow">
      <div className="flex-grow max-md:translate-y-16 lg:translate-x-[100px] xl:translate-x-[150px]">
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
      </div>
      <div
        className="z-[-1] flex-none
        max-md:absolute max-md:w-[300px] max-md:h-[300px] max-md:top-[-9%] max-md:left-[-20%]
        lg:static lg:w-[400px] lg:h-[400px] md:-translate-x-[70px] md:max-lg:-translate-y-[70px] lg:-translate-x-[100px]
        xl:w-[550px] xl:h-[550px] xl:-translate-x-[150px]"
      >
        <Img
          style={{ width: '100%', height: '100%' }}
          fixed={props.data.heroImage.childImageSharp.fixed}
          alt="Duotone close-up Portrait"
          loading="eager"
        />
      </div>
    </div>
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
