import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Button = styled.button`
  transition: all 0.15s ease-in-out;
  font-size: 0.9rem;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.15rem;
  padding: ${props => `${props.theme.spacing.sm} ${props.theme.spacing.lg}`};
  border-radius: 25px;
  background-image: ${props =>
    `linear-gradient(-45deg, ${props.theme.colors.primary}, ${props.theme.colors.accent})`};
  color: ${props => props.theme.colors.white};
  width: ${props => (props.fullWidth ? '100%' : 'unset')};

  &:hover {
    transform: scale(1.065, 1.065);
  }

  &[disabled] {
    opacity: 0.3;
    pointer-events: none;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

Button.propTypes = {
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  fullWidth: false,
};

export default Button;
