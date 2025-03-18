import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, contentDirection = 'row', contentJustification = 'center' }) => (
  <div
    className={`
      flex
      ${contentDirection === 'column' ? 'flex-col' : 'flex-row'}
      ${
        contentJustification === 'flex-start'
          ? 'justify-start'
          : contentJustification === 'center'
          ? 'justify-center'
          : contentJustification === 'space-between'
          ? 'justify-between'
          : contentJustification === 'space-evenly'
          ? 'justify-evenly'
          : 'justify-start'
      }
    `}
  >
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  contentDirection: PropTypes.oneOf(['column', 'row']),
  contentJustification: PropTypes.oneOf(['flex-start', 'center', 'space-between', 'space-evenly']),
};

export default Container;
