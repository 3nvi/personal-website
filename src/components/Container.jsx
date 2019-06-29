import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.div(({ contentDirection, contentJustification }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: contentDirection,
  [contentDirection.includes('row') ? 'justifyContent' : 'alignItems']: contentJustification,
  [contentDirection.includes('row') ? 'alignItems' : 'justifyContent']: 'center',
}));

Container.propTypes = {
  contentDirection: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  contentJustification: PropTypes.oneOf([
    'space-between',
    'center',
    'space-around',
    'space-evenly',
  ]),
};

Container.defaultProps = {
  contentDirection: 'row',
  contentJustification: 'center',
};
export default Container;
