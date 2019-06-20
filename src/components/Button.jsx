import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Button = styled.button`
  transition: all 0.15s ease-in-out;
  font-size: 0.9rem;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.2rem;
  padding: ${props => `${props.theme.spacing.sm} ${props.theme.spacing.lg}`};
  border-radius: ${props => (props.shape === 'pill' ? '25px' : '4px')};
  background-image: ${props =>
    props.variation === 'primary'
      ? `linear-gradient(-45deg, ${props.theme.colors.primary}, ${props.theme.colors.accent})`
      : undefined};
  color: ${props =>
    props.variation === 'primary' ? props.theme.colors.white : props.theme.colors.black};
  width: ${props => (props.fullWidth ? '100%' : 'unset')};

  &:hover {
    transform: scale(1.065, 1.065);
  }
`;

Button.propTypes = {
  variation: PropTypes.oneOf(['primary']),
  shape: PropTypes.oneOf(['pill', 'rect']),
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  fullWidth: false,
  variation: 'primary',
  shape: 'pill',
};

export default Button;
