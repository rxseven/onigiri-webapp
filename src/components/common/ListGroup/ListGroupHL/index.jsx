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
const ListGroupHL = ({ children }) => <h5 styleName="headline">{children}</h5>;

// Specify prop types
ListGroupHL.propTypes = propTypes;

// Module exports
export default ListGroupHL;
