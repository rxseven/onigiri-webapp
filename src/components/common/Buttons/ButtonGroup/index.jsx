// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Constants
import CSS from 'constants/string/css';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  size: PropTypes.string
});

// Component
const ButtonGroup = ({ children, label, size }) => {
  // Configuration
  const baseClass = 'btn-group';

  // View
  return (
    <div
      aria-label={label}
      className={cx(baseClass, size && `${baseClass}-${CSS.size[size]}`)}
      role="group"
    >
      {children}
    </div>
  );
};

// Specify prop types
ButtonGroup.propTypes = propTypes;

// Module exports
export default ButtonGroup;
