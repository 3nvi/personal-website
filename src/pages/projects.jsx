import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Project from '../components/Project';
import Text from '../components/Text';
import SEO from '../components/SEO';
import Heading from '../components/Heading';

const ProjectsPage = props => {
  const renderProject = project => (
    <Project
      title={project.title}
      description={project.description}
      timeInMinutes={project.timeInMinutes}
      href={project.href}
      tags={project.tags}
      bannerImgData={project.banner.childImageSharp.fluid}
      screenshotListImgData={project.screenshots.map(ss => ss.childImageSharp.fluid)}
      githubUrl={project.githubUrl}
    />
  );
  return (
    <Layout>
      <SEO
        title="Projects"
        description="Browse Aggelos Arvanitakis' freelancing, open source & fun projects"
      />
      <section className="md:my-20">
        <header className="border-b border-gray-200 py-8">
          <Heading size="small">Commercial Projects</Heading>
        </header>
        <Text>
          This is a list of projects that I have professionally worked on. The technologies shown in
          the tags, are not only the ones that this particular project employs, but the ones that I
          have personally worked with in each product. The list is not exhaustive, but only includes
          the projects that I'm allowed to disclose.
        </Text>
        <ul id="commercial-projects">
          {props.data.commercialProjects.edges.map(({ node: { frontmatter: project } }) => (
            <li key={project.title} className="border-gray-200 [&:not(:last-of-type)]:border-b">
              {renderProject(project)}
            </li>
          ))}
        </ul>
      </section>
      <section className="md:my-20">
        <header className="border-b border-gray-200 py-8">
          <Heading size="small">Open Source & Fun Projects</Heading>
        </header>
        <Text>
          This is a list of projects that I have either open-sourced or developed for fun. At least
          they were all "fun" in the beginning...
        </Text>
        <ul id="fun-projects">
          {props.data.funProjects.edges.map(({ node: { frontmatter: project } }) => (
            <li key={project.title} className="border-gray-200 [&:not(:last-of-type)]:border-b">
              {renderProject(project)}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default ProjectsPage;

export const query = graphql`
  fragment Project on MarkdownRemark {
    frontmatter {
      banner {
        childImageSharp {
          fluid(quality: 75, maxWidth: 550, toFormat: JPG) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
            originalImg
          }
        }
      }
      description
      githubUrl
      href
      title
      tags
      screenshots {
        childImageSharp {
          fluid(quality: 75, srcSetBreakpoints: [200], maxWidth: 200, toFormat: JPG) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
            originalImg
          }
        }
      }
    }
  }

  query {
    commercialProjects: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/projects/commercial/*/index.md" } }
      sort: { fields: frontmatter___startedAt, order: DESC }
    ) {
      edges {
        node {
          ...Project
        }
      }
    }
    funProjects: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/projects/fun/*/index.md" } }
    ) {
      edges {
        node {
          ...Project
        }
      }
    }
  }
`;
