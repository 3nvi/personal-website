import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = ({ children, fullWidth, disabled, ...props }) => (
  <button
    disabled={disabled}
    className={clsx(
      'font-[system-ui] leading-none transition-all duration-150 ease-in-out text-sm uppercase font-bold tracking-[0.15rem] px-12 py-4 rounded-3xl bg-gradient-to-l from-primary to-accent text-white w-full md:w-auto',
      {
        'md:w-full': fullWidth,
        'hover:scale-[1.065]': !disabled,
        'disabled:opacity-30 disabled:pointer-events-none': disabled,
      }
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
