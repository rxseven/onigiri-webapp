// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Declare prop types and default props
const propTypes = exact({
  column: {
    children: PropTypes.node.isRequired,
    size: PropTypes.string
  },
  container: {
    children: PropTypes.node.isRequired
  },
  row: {
    alignment: PropTypes.string,
    children: PropTypes.node.isRequired
  }
});

const defaultProps = {
  column: {
    size: 'col'
  },
  row: {
    alignment: null
  }
};

// Column
export const Column = ({ children, size }) => <div className={size}>{children}</div>;

// Container
export const Container = ({ children }) => <div className="container">{children}</div>;

// Row
export const Row = ({ alignment, children }) => (
  <div className={cx('row', alignment)}>{children}</div>
);

// Specify prop types and default values for props
Column.propTypes = propTypes.column;
Container.propTypes = propTypes.container;
Row.propTypes = propTypes.row;

Column.defaultProps = defaultProps.column;
Row.defaultProps = defaultProps.row;
