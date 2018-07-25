// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Companion files
import './styles.scss';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired
});

// Component
const Overlay = ({ children }) => (
  <div styleName="wrapper">
    <div styleName="content">{children}</div>
  </div>
);

// Specify prop types
Overlay.propTypes = propTypes;

// Module exports
export default Overlay;
