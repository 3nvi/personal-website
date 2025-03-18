import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ children }) => <div className="grid grid-cols-16 w-full">{children}</div>;

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
