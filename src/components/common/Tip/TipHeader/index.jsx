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
const TipHeader = ({ children }) => <h3 styleName="header">{children}</h3>;

// Specify prop types
TipHeader.propTypes = propTypes;

// Module exports
export default TipHeader;
