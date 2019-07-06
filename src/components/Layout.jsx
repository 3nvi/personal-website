import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import theme from '../utils/theme';
import NavHeader from './NavHeader';
import { twitterHandle, githubHandle, linkedinHandle, mediumHandle } from '../utils/constants';
import FuturaBookFont from '../assets/fonts/Futura-Book.woff';
import FuturaBoldFont from '../assets/fonts/Futura-Bold.woff';
import TwitterSVG from '../assets/icons/twitter.svg';
import MediumSVG from '../assets/icons/medium.svg';
import GithubSVG from '../assets/icons/github.svg';
import LinkedinSVG from '../assets/icons/linkedin.svg';

const globalStyles = css`
  @font-face {
    font-family: 'FuturaNew';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${FuturaBookFont}) format('woff');
  }

  @font-face {
    font-family: 'FuturaNew';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${FuturaBoldFont}) format('woff');
  }

  @font-face {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Playfair Display Bold'), local('PlayfairDisplay-Bold'),
      url(https://fonts.gstatic.com/s/playfairdisplay/v14/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lW4e5j5hNKc.woff2)
        format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  html {
    font-size: 16px;
    font-family: 'FuturaNew', sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration: none;
  }
`;

const ResponsiveWrapper = styled.div`
  position: relative;
  margin: auto;
  padding: 20px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.black};

  main {
    flex-grow: 1;
  }

  @meida only screen and (max-width: 768px) {
    width: 100%;
    padding: 20px 10px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    width: 768px;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1599px) {
    width: 1200px;
  }

  @media only screen and (min-width: 1600px) {
    width: 1600px;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
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

const Footer = styled.footer`
  position: relative;
`;

const Copyright = styled.p`
  position: absolute;
  right: 0;
  bottom: ${({ theme }) => theme.spacing.sm};

  @media only screen and (max-width: 1199px) {
    display: none;
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <ResponsiveWrapper>
      <NavHeader />
      <Main>{children}</Main>
      <Footer>
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
            href={`https://linkedin.com/in/${linkedinHandle}`}
          >
            <LinkedinSVG />
          </ExternalServiceFabLink>
        </ExternalServices>
        <Copyright>© Aggelos Arvanitakis</Copyright>
      </Footer>
    </ResponsiveWrapper>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
