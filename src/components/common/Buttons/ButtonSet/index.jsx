// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Companion files
import './styles.scss';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired,
  options: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
});

// Component
const ButtonSet = ({ children, options }) => (
  <div className={cx(options)} styleName="button-set">
    {children}
  </div>
);

// Specify prop types
ButtonSet.propTypes = propTypes;

// Module exports
export default ButtonSet;
