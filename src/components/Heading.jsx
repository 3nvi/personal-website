import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Heading = styled.h1`
  font-family: 'Playfair Display', 'FuturaNew', sans-serif;

  @media only screen and (max-width: 767px) {
    font-size: 3.25rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: ${props => (props.size === 'small' ? '4rem' : '6.5rem')};
  }

  @media only screen and (min-width: 1200px) and (max-width: 1599px) {
    font-size: ${props => (props.size === 'small' ? '4rem' : '8rem')};
  }

  @media only screen and (min-width: 1600px) {
    font-size: ${props => (props.size === 'small' ? '5rem' : '10rem')};
  }
`;

Heading.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
};

Heading.defaultProps = {
  size: 'large',
};

export default Heading;
