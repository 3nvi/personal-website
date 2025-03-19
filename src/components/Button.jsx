import React from 'react';
import PropTypes from 'prop-types';

const Button = React.forwardRef(({ children, fullWidth, disabled, className, ...props }, ref) => (
  <button
    ref={ref}
    disabled={disabled}
    className={`
      font-[system-ui]
      leading-none
      transition-all duration-150 ease-in-out
      text-sm
      uppercase
      font-bold
      tracking-[0.15rem]
      px-12 py-4
      rounded-3xl
      bg-gradient-to-l from-primary to-accent
      text-white
      w-full md:w-auto
      ${fullWidth ? 'md:w-full' : ''}
      hover:scale-[1.065]
      disabled:opacity-30 disabled:pointer-events-none
      ${className || ''}
    `}
    {...props}
  >
    {children}
  </button>
));

Button.propTypes = {
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  fullWidth: false,
  disabled: false,
  className: '',
};

export default Button;
