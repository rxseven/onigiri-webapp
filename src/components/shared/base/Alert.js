// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Declare prop types and default props
const propTypes = exact({
  children: PropTypes.node.isRequired,
  options: PropTypes.string,
  type: PropTypes.string
});

const defaultProps = {
  type: 'danger'
};

// Comnponent
const Alert = ({
  children, flat, options, type
}) => {
  // Configuration
  const baseClass = 'alert';

  // View
  return (
    <div className={cx(baseClass, `${baseClass}-${type}`, options)} role="alert">
      {children}
    </div>
  );
};

// Specify prop types and default values for props
Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

// Module exports
export default Alert;
