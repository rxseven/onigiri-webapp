// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Declare prop types and default props
const propTypes = exact({
  container: {
    children: PropTypes.node.isRequired
  },
  row: {
    alignment: PropTypes.string,
    children: PropTypes.node.isRequired
  }
});

const defaultProps = {
  row: {
    alignment: null
  }
};

// Container
export const Container = ({ children }) => <div className="container">{children}</div>;

// Row
export const Row = ({ alignment, children }) => (
  <div className={cx('row', alignment)}>{children}</div>
);

// Specify prop types and default values for props
Container.propTypes = propTypes.container;
Row.propTypes = propTypes.row;

Row.defaultProps = defaultProps.row;
