// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

import Alert from '../common/Alert';

// Declare prop types
const propTypes = exact({
  alert: PropTypes.shape({
    message: PropTypes.string.isRequired
  }),
  options: PropTypes.string
});

// Component
const Error = ({ alert, options }) => (
  <Alert type="danger">
    <strong>Oops!</strong> {alert.message}
  </Alert>
);

// Specify prop types
Error.propTypes = propTypes;

// Module exports
export default Error;
