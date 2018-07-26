// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Companion files
import './styles.scss';

// Declare prop types
const propTypes = exact({
  children: PropTypes.string.isRequired
});

// Component
const FormHL = ({ children }) => <h2 styleName="headline">{children}</h2>;

// Specify prop types
FormHL.propTypes = propTypes;

// Module exports
export default FormHL;
