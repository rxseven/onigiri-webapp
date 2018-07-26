// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Declare prop types and default props
const propTypes = exact({
  bold: PropTypes.bool,
  children: PropTypes.node.isRequired,
  options: PropTypes.string
});

const defaultProps = {
  bold: false,
  options: null
};

// Component
const CardSubtitle = ({ bold, children, options }) => (
  <h6 className={cx('card-title', bold && 'font-weight-bold', options)}>{children}</h6>
);

// Specify prop types and default values for props
CardSubtitle.propTypes = propTypes;
CardSubtitle.defaultProps = defaultProps;

// Module exports
export default CardSubtitle;
