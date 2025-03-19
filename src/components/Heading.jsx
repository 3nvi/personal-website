import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Heading = ({ children, size = 'large' }) => (
  <h1
    className={clsx(
      'font-playfair',
      size === 'small' && 'text-5xl md:text-6xl lg:text-6xl xl:text-7xl',
      size === 'large' && 'text-5xl md:text-8xl lg:text-9xl xl:text-[10rem]'
    )}
  >
    {children}
  </h1>
);

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
};

export default Heading;
