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
const SHL = ({ children }) => <h3 styleName="subheadline">{children}</h3>;

// Specify prop types
SHL.propTypes = propTypes;

// Module exports
export default SHL;
