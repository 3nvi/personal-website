import React from 'react';
import PropTypes from 'prop-types';
import NavHeader from './NavHeader';
import { twitterHandle, githubHandle, linkedinHandle, mediumHandle } from '../utils/constants';
import TwitterSVG from '../assets/icons/twitter.svg';
import MediumSVG from '../assets/icons/medium.svg';
import GithubSVG from '../assets/icons/github.svg';
import LinkedinSVG from '../assets/icons/linkedin.svg';

const SocialLink = ({ href, title, 'aria-label': ariaLabel, icon: Icon }) => (
  <a href={href} title={title} aria-label={ariaLabel} className="p-2.5">
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 transition-colors hover:translate-y-[-4px] hover:bg-gray-700">
      <Icon className="h-3 w-3 fill-white" />
    </div>
  </a>
);

const Layout = ({ children }) => (
  <div className="container flex min-h-screen flex-col p-5 text-gray-700">
    <NavHeader />
    <main className="flex flex-grow flex-col">{children}</main>
    <footer className="relative">
      <address className="flex justify-center">
        <SocialLink
          href={`https://twitter.com/${twitterHandle}`}
          title="Twitter"
          aria-label="Twitter"
          icon={TwitterSVG}
        />
        <SocialLink
          href={`https://medium.com/@${mediumHandle}`}
          title="Medium"
          aria-label="Medium"
          icon={MediumSVG}
        />
        <SocialLink
          href={`https://github.com/${githubHandle}`}
          title="Github"
          aria-label="Github"
          icon={GithubSVG}
        />
        <SocialLink
          href={`https://linkedin.com/in/${linkedinHandle}`}
          title="Linkedin"
          aria-label="Linkedin"
          icon={LinkedinSVG}
        />
      </address>
      <p className="absolute bottom-4 right-0 hidden lg:block">© Aggelos Arvanitakis</p>
    </footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
