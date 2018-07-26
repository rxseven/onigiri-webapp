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
const CardText = ({ children, options }) => <p className={cx('card-text', options)}>{children}</p>;

// Specify prop types and default values for props
CardText.propTypes = propTypes;
CardText.defaultProps = defaultProps;

// Module exports
export default CardText;
