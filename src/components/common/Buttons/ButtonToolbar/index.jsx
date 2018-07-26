// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Constants
import CSS from 'constants/string/css';

// Declare prop types and default props
const propTypes = exact({
  alignItem: PropTypes.string,
  children: PropTypes.node.isRequired,
  justifyContent: PropTypes.string,
  label: PropTypes.string.isRequired,
  marginBottom: PropTypes.string
});

const defaultProps = {
  alignItem: 'center',
  justifyContent: 'between',
  marginBottom: CSS.margin.MB04
};

// Component
const ButtonToolbar = ({
  alignItem, children, justifyContent, label, marginBottom
}) => (
  <div
    aria-label={label}
    className={cx(
      `align-items-${alignItem}`,
      'btn-toolbar',
      `justify-content-${justifyContent}`,
      marginBottom
    )}
    role="toolbar"
  >
    {children}
  </div>
);

// Specify prop types and default values for props
ButtonToolbar.propTypes = propTypes;
ButtonToolbar.defaultProps = defaultProps;

// Module exports
export default ButtonToolbar;
