import React from 'react';
import PropTypes from 'prop-types';
import NavHeader from './NavHeader';
import { twitterHandle, githubHandle, linkedinHandle, mediumHandle } from '../utils/constants';
import TwitterSVG from '../assets/icons/twitter.svg';
import MediumSVG from '../assets/icons/medium.svg';
import GithubSVG from '../assets/icons/github.svg';
import LinkedinSVG from '../assets/icons/linkedin.svg';

const Layout = ({ children }) => (
  <div className="w-full min-h-screen flex flex-col max-md:py-5 max-md:px-2.5 text-black">
    <NavHeader />
    <main className="flex-grow flex flex-col">{children}</main>
    <footer className="relative">
      <address className="flex justify-center">
        <a
          href={`https://twitter.com/${twitterHandle}`}
          title="Twitter"
          aria-label="Twitter"
          className="p-2.5"
        >
          <div className="w-8 h-8 rounded-full bg-gray-500 hover:bg-black hover:translate-y-[-4px] transition-colors flex items-center justify-center">
            <TwitterSVG className="w-3 h-3 fill-white" />
          </div>
        </a>

        <a
          href={`https://medium.com/@${mediumHandle}`}
          title="Medium"
          aria-label="Medium"
          className="p-2.5"
        >
          <div className="w-8 h-8 rounded-full bg-gray-500 hover:bg-black hover:translate-y-[-4px] transition-colors flex items-center justify-center">
            <MediumSVG className="w-3 h-3 fill-white" />
          </div>
        </a>

        <a
          href={`https://github.com/${githubHandle}`}
          title="Github"
          aria-label="Github"
          className="p-2.5"
        >
          <div className="w-8 h-8 rounded-full bg-gray-500 hover:bg-black hover:translate-y-[-4px] transition-colors flex items-center justify-center">
            <GithubSVG className="w-3 h-3 fill-white" />
          </div>
        </a>

        <a
          href={`https://linkedin.com/in/${linkedinHandle}`}
          title="Linkedin"
          aria-label="Linkedin"
          className="p-2.5"
        >
          <div className="w-8 h-8 rounded-full bg-gray-500 hover:bg-black hover:translate-y-[-4px] transition-colors flex items-center justify-center">
            <LinkedinSVG className="w-3 h-3 fill-white" />
          </div>
        </a>
      </address>
      <p className="absolute right-0 bottom-4 hidden lg:block">© Aggelos Arvanitakis</p>
    </footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
