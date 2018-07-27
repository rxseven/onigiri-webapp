// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';
import { Link } from 'react-router-dom';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired
});

// Component
const CardLink = ({ children, link }) => (
  <Link className="card-link" to={link}>
    {children}
  </Link>
);

// Specify prop types
CardLink.propTypes = propTypes;

// Module exports
export default CardLink;
