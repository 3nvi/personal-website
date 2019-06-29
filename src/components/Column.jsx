import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const calcGridColumn = (columnSpan, centered) =>
  `${centered ? (16 - columnSpan) / 2 + 1 : 1} / span ${columnSpan}`;

const Column = styled.div(({ centered, mobile, tablet, computer, largeMonitor }) => ({
  height: '100%',

  '@media only screen and (max-width: 767px)': {
    gridColumn: calcGridColumn(mobile, centered),
  },

  '@media only screen and (min-width: 768px) and (max-width: 1199px)': {
    gridColumn: calcGridColumn(tablet, centered),
  },

  '@media only screen and (min-width: 1200px) and (max-width: 1599px)': {
    gridColumn: calcGridColumn(computer, centered),
  },

  '@media only screen and (min-width: 1600px)': {
    gridColumn: calcGridColumn(largeMonitor, centered),
  },
}));

Column.propTypes = {
  centered: PropTypes.bool,
  mobile: PropTypes.number,
  tablet: PropTypes.number,
  computer: PropTypes.number,
  largeMonitor: PropTypes.number,
};

Column.defaultProps = {
  centered: false,
  mobile: 16,
  tablet: 16,
  computer: 16,
  largeMonitor: 16,
};

export default Column;
