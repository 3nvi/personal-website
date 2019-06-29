import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Text = styled.p(props => ({
  maxWidth: props.limited ? '500px' : undefined,
  lineHeight: '1.7rem',
  margin: `${props.theme.spacing.md} 0`,
  color: props.theme.colors.grey,
  ...(props.spaced && {
    letterSpacing: '0.15rem',
    '@media(max-width: 767px)': {
      letterSpacing: '0.1rem',
    },
  }),
}));

Text.propTypes = {
  spaced: PropTypes.bool,
  limited: PropTypes.bool,
};

Text.defaultProps = {
  spaced: false,
  limited: false,
};

export default Text;
