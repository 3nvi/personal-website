import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = ({ children, fullWidth, disabled, ...props }) => (
  <button
    disabled={disabled}
    className={clsx(
      'w-full cursor-pointer rounded-3xl bg-gradient-to-l from-primary to-accent px-12 py-4 font-[system-ui] text-sm font-bold uppercase leading-none tracking-[0.15rem] text-white transition-all duration-150 ease-in-out hover:scale-[1.065] md:w-auto',
      fullWidth && 'md:w-full',
      disabled && 'disabled:pointer-events-none disabled:opacity-30'
    )}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  fullWidth: false,
  disabled: false,
};

export default Button;
