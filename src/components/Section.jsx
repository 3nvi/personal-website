import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const SectionHeader = ({ children }) => (
  <header className="py-8 border-b border-lightgrey">{children}</header>
);

const Section = ({ children }) => <section className="md:my-20">{children}</section>;

Section.Header = SectionHeader;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

SectionHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
