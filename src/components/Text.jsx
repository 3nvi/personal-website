import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Text = ({ children, spaced = false, ...props }) => (
  <p
    className={clsx(
      'my-8 leading-[1.7rem] text-gray-400',
      spaced && 'tracking-widest md:tracking-[0.15rem]'
    )}
    {...props}
  >
    {children}
  </p>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
  spaced: PropTypes.bool,
};

export default Text;
