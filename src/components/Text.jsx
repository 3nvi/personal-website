import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Text = ({ children, limited = false, spaced = false, ...props }) => (
  <p
    className={clsx(
      'my-8 leading-[1.7rem] text-grey',
      limited && 'max-w-[500px]',
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
  limited: PropTypes.bool,
};

export default Text;
