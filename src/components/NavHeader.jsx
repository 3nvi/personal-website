import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { disablePageScrolling } from '../utils/helpers';
import clsx from 'clsx';

const NavHeader = () => {
  const [isMobileMenuVisible, setMobileMenuVisibility] = React.useState(false);

  React.useEffect(() => {
    disablePageScrolling(isMobileMenuVisible);
  }, [isMobileMenuVisible]);

  const { logo } = useStaticQuery(
    graphql`
      query {
        logo: file(name: { eq: "favicon" }, relativeDirectory: { eq: "img" }) {
          childImageSharp {
            fixed(width: 30, height: 30) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    `
  );

  const PageLink = ({ to, children, className = '' }) => (
    <Link
      to={to}
      activeClassName="active"
      className={clsx(
        'relative tracking-[0.2rem] no-underline p-4 text-black',
        'after:absolute after:w-[calc(100%-1.5rem)] after:left-0 after:right-0 after:bottom-0 after:mx-auto',
        '[&.active]:font-bold',
        "[&.active]:after:content-[''] [&.active]:after:h-[5px] [&.active]:after:rounded-[25px]",
        '[&.active]:after:bg-gradient-to-l [&.active]:after:from-primary [&.active]:after:to-accent',
        "hover:[&:not(.active)]:after:content-[''] hover:[&:not(.active)]:after:h-px hover:[&:not(.active)]:after:bg-black",
        className
      )}
    >
      {children}
    </Link>
  );

  const HomeLink = ({ children, ...props }) => (
    <PageLink
      {...props}
      className="text-xl leading-none font-bold max-lg:hidden [&.active]:after:hidden"
    >
      {children}
    </PageLink>
  );

  return (
    <header className="sticky bg-white top-0 z-10 py-3 flex items-center max-md:mb-16">
      <nav className="flex justify-between flex-grow">
        <ul className="md:flex md:items-center">
          <li className="flex items-center max-md:hidden">
            <Img fixed={logo.childImageSharp.fixed} alt="logo" />
            <HomeLink to="/">Aggelos.</HomeLink>
          </li>
        </ul>
        <ul
          className={`
          md:flex md:items-center
          max-md:fixed max-md:w-screen max-md:h-screen max-md:top-0 max-md:left-0
          max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center
          ${isMobileMenuVisible ? 'max-md:flex' : 'max-md:hidden'}
          max-md:bg-white/[0.975] max-md:z-10
          max-md:gap-y-4 md:max-lg:gap-x-4 lg:gap-x-8
        `}
        >
          <li className="flex">
            <PageLink to="/">Home</PageLink>
          </li>
          <li className="flex">
            <PageLink to="/about">About</PageLink>
          </li>
          <li className="flex">
            <PageLink to="/publications">Publications</PageLink>
          </li>
          <li className="flex">
            <PageLink to="/projects">Projects</PageLink>
          </li>
          <li className="flex max-md:mb-3 md:max-lg:mr-3 lg:mr-4">
            <PageLink to="/contact">Contact</PageLink>
          </li>
        </ul>
      </nav>
      <button
        aria-label="Toggle menu"
        className={clsx(
          'md:hidden',
          'absolute',
          'right-3 top-3',
          'z-[1009]',
          'p-4',
          'bg-transparent',
          'border-none',
          "before:content-[''] before:block before:w-[30px] before:h-px before:bg-black",
          'before:transition-all before:duration-200 before:ease-linear',
          isMobileMenuVisible ? 'before:translate-y-[3px] before:rotate-45' : 'before:mb-[15px]',
          "after:content-[''] after:block after:w-[30px] after:h-px after:bg-black",
          'after:transition-all after:duration-200 after:ease-linear',
          isMobileMenuVisible ? 'after:translate-y-[3px] after:-rotate-45' : ''
        )}
        onClick={() => setMobileMenuVisibility(!isMobileMenuVisible)}
      />
    </header>
  );
};

export default NavHeader;
