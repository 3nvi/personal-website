import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import TwitterSVG from '../icons/twitter.svg';
import LinkedinSVG from '../icons/linkedin.svg';
import MediumSVG from '../icons/medium.svg';
import GithubSVG from '../icons/github.svg';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

const NavGroup = styled.ul`
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 767px) {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: ${props => (props.isMobileMenuVisible ? 'flex' : 'none')};
    background-color: rgba(255, 255, 255, 0.975);
    z-index: 1;
  }
`;

const NavGroupItem = styled.li`
  display: inherit;
  a {
    position: relative;
    letter-spacing: 0.2rem;
    text-decoration: none;
    padding: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.black};
  }

  @media only screen and (max-width: 767px) {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    margin-right: ${({ theme }) => theme.spacing.sm};
  }

  @media only screen and (min-width: 1200px) {
    margin-right: ${({ theme }) => theme.spacing.md};
  }
`;

const MobileNavGroupJewel = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.sm};
  z-index: 1009;
  padding: 15px;

  @media only screen and (min-width: 768px) {
    display: none;
  }

  &::before,
  &::after {
    transition: all 0.2s linear;
    content: '';
    display: block;
    width: 30px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.black};
  }

  &::before {
    margin-bottom: ${props => (!props.isOpen ? '15px' : 0)};
    transform: ${props => (props.isOpen ? 'translateY(3px) rotate(45deg)' : undefined)};
  }

  &::after {
    transform: ${props => (props.isOpen ? 'translateY(3px) rotate(-45deg)' : undefined)};
  }
`;

const PageLink = styled(props => <Link {...props} activeClassName="active" />)`
  &.active {
    font-weight: bold;
  }

  &::after {
    position: absolute;
    width: ${({ theme }) => `calc(100% - 2 * ${theme.spacing.sm})`};
    left: 0;
    right: 0;
    bottom: 0;
    margin-left: auto;
    margin-right: auto;
  }

  &.active::after {
    content: '';
    height: 5px;
    border-radius: 25px;
    background-image: ${({ theme }) =>
      `linear-gradient(-45deg, ${theme.colors.primary}, ${theme.colors.accent})`};
  }

  &:not(.active):hover::after {
    content: '';
    height: 1px;
    background-color: ${({ theme }) => theme.colors.black};
  }
`;

const HomeLink = styled(PageLink)`
  font-size: 1.25rem;
  font-weight: bold;

  &.active::after {
    display: none;
  }

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    display: none;
  }
`;

const Header = () => {
  const [isMobileMenuVisible, setMobileMenuVisibility] = React.useState(false);

  return (
    <Wrapper>
      <Nav>
        <NavGroup>
          <NavGroupItem>
            <HomeLink to="/">Aggelos.</HomeLink>
          </NavGroupItem>
        </NavGroup>
        <NavGroup isMobileMenuVisible={isMobileMenuVisible}>
          <NavGroupItem>
            <PageLink to="/">Home</PageLink>
          </NavGroupItem>
          <NavGroupItem>
            <PageLink to="/about">About</PageLink>
          </NavGroupItem>
          <NavGroupItem>
            <PageLink to="/publications">Publications</PageLink>
          </NavGroupItem>
          <NavGroupItem>
            <PageLink to="/projects">Projects</PageLink>
          </NavGroupItem>
          <NavGroupItem>
            <PageLink to="/contact">Contact</PageLink>
          </NavGroupItem>
        </NavGroup>
      </Nav>
      <MobileNavGroupJewel
        aria-label="Toggle menu"
        isOpen={isMobileMenuVisible}
        onClick={() => setMobileMenuVisibility(!isMobileMenuVisible)}
      />
    </Wrapper>
  );
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
