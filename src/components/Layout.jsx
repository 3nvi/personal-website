import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import theme from '../utils/theme';
import NavHeader from './NavHeader';
import './layout.css';
import { twitterHandle, githubHandle, linkedinHandle, mediumHandle } from '../utils/constants';
import TwitterSVG from '../assets/icons/twitter.svg';
import MediumSVG from '../assets/icons/medium.svg';
import GithubSVG from '../assets/icons/github.svg';
import LinkedinSVG from '../assets/icons/linkedin.svg';

const ResponsiveWrapper = styled.div`
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

const Main = styled.main`
  @media only screen and (max-width: 767px) {
    margin: ${({ theme }) => `${theme.spacing.xl} 0 ${theme.spacing.lg} 0`};
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
    <ResponsiveWrapper>
      <NavHeader />
      <Main>{children}</Main>
      <footer>
        <ExternalServices>
          <ExternalServiceFabLink
            title="Twitter"
            aria-label="Twitter"
            href={`https://twitter.com/${twitterHandle}`}
          >
            <TwitterSVG />
          </ExternalServiceFabLink>

          <ExternalServiceFabLink
            title="Medium"
            aria-label="Medium"
            href={`https://medium.com/@${mediumHandle}`}
          >
            <MediumSVG />
          </ExternalServiceFabLink>

          <ExternalServiceFabLink
            title="Github"
            aria-label="Github"
            href={`https://github.com/${githubHandle}`}
          >
            <GithubSVG />
          </ExternalServiceFabLink>

          <ExternalServiceFabLink
            title="Linkedin"
            aria-label="Linkedin"
            href={`https://NavGroupItemnkedin.com/in/${linkedinHandle}`}
          >
            <LinkedinSVG />
          </ExternalServiceFabLink>
        </ExternalServices>
        <Copyright>© Aggelos Arvanitakis</Copyright>
      </footer>
    </ResponsiveWrapper>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
