// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Declare prop types and default props
const propTypes = exact({
  alignment: PropTypes.string,
  children: PropTypes.node.isRequired
});

const defaultProps = {
  alignment: null
};

// Component
const Row = ({ alignment, children }) => <div className={cx('row', alignment)}>{children}</div>;

// Specify prop types and default values for props
Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

// Module exports
export default Row;
