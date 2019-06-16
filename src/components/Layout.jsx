import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import theme from '../utils/theme';
import Header from './Header';
import './layout.css';
import TwitterSVG from '../icons/twitter.svg';
import MediumSVG from '../icons/medium.svg';
import GithubSVG from '../icons/github.svg';
import LinkedinSVG from '../icons/linkedin.svg';

const Container = styled.div`
  position: relative;
  margin: auto;
  padding: 20px;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.black};

  main {
    flex-grow: 1;
  }

  @meida only screen and (max-width: 768px) {
    padding: 20px 10px;
  }

  @media only screen and (min-width: 768px) {
    width: 768px;
  }

  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }

  @media only screen and (min-width: 1600px) {
    width: 1600px;
  }
`;

const ExternalServices = styled.address`
  display: flex;
  justify-content: center;
`;

const ExternalServiceFabLink = styled(({ children, ...rest }) => (
  <a target="_blank" rel="noopener noreferrer" {...rest}>
    <div>{children}</div>
  </a>
))`
  padding: 10px;
  transition: transform 0.3s ease-out;

  & > div {
    transition: background-color 0.15s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.grey};
  }

  svg {
    width: 10px;
    height: 10px;
  }

  path {
    fill: white;
  }

  @media only screen and (min-width: 1200px) {
    &:hover {
      transform: translateY(-4px);
      & > div {
        background-color: ${({ theme }) => theme.colors.black};
      }
    }
  }
`;

const Copyright = styled.p`
  text-align: right;
  @media only screen and (max-width: 1199px) {
    display: none;
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <Header />
      <main>{children}</main>
      <footer>
        <StaticQuery
          query={graphql`
            query SiteThirdPartyServicesQuery {
              site {
                siteMetadata {
                  linkedinHandle
                  twitterHandle
                  githubHandle
                  mediumHandle
                }
              }
            }
          `}
          render={data => (
            <ExternalServices>
              <ExternalServiceFabLink
                title="Twitter"
                aria-label="Twitter"
                href={`https://twitter.com/${data.site.siteMetadata.twitterHandle}`}
              >
                <TwitterSVG />
              </ExternalServiceFabLink>

              <ExternalServiceFabLink
                title="Medium"
                aria-label="Medium"
                href={`https://medium.com/@${data.site.siteMetadata.mediumHandle}`}
              >
                <MediumSVG />
              </ExternalServiceFabLink>

              <ExternalServiceFabLink
                title="Github"
                aria-label="Github"
                href={`https://github.com/${data.site.siteMetadata.githubHandle}`}
              >
                <GithubSVG />
              </ExternalServiceFabLink>

              <ExternalServiceFabLink
                title="Linkedin"
                aria-label="Linkedin"
                href={`https://NavGroupItemnkedin.com/in/${data.site.siteMetadata.linkedinHandle}`}
              >
                <LinkedinSVG />
              </ExternalServiceFabLink>
            </ExternalServices>
          )}
        />
        <Copyright>© Aggelos Arvanitakis</Copyright>
      </footer>
    </Container>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
