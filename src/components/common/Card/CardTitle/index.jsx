// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Declare prop types and default props
const propTypes = exact({
  children: PropTypes.node.isRequired,
  options: PropTypes.string
});

const defaultProps = {
  options: null
};

// Component
export const CardTitle = ({ children, options }) => (
  <h5 className={cx('card-title', options)}>{children}</h5>
);

// Specify prop types and default values for props
CardTitle.propTypes = propTypes;
CardTitle.defaultProps = defaultProps;

// Module exports
export default CardTitle;
