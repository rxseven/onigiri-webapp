// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired
});

// Modal footer
const ModalFooter = ({ children }) => <div className="modal-footer">{children}</div>;

// Specify prop types
ModalFooter.propTypes = propTypes;

// Module exports
export default ModalFooter;
