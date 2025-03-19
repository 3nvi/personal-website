import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Text = ({ children, limited = false, spaced = false, ...props }) => (
  <p
    className={clsx('leading-[1.7rem] my-8 text-grey', {
      'max-w-[500px]': limited,
      'tracking-widest md:tracking-[0.15rem]': spaced,
    })}
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
