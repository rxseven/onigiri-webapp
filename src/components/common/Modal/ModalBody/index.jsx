// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired
});

// Component
const ModalBody = ({ children }) => <div className="modal-body">{children}</div>;

// Specify prop types
ModalBody.propTypes = propTypes;

// Module exports
export default ModalBody;
