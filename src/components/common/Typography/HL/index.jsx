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
const HL = ({ children }) => <h2 styleName="headline">{children}</h2>;

// Specify prop types
HL.propTypes = propTypes;

// Module exports
export default HL;
