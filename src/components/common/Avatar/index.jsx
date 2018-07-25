// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Companion files
import './styles.scss';

// Declare prop types
const propTypes = exact({
  url: PropTypes.string.isRequired
});

// Component
const Avatar = ({ url }) => (
  <div className="avatar" styleName="wrapper">
    <img alt="Avtar" src={url} styleName="photo" />
  </div>
);

// Specify prop types
Avatar.propTypes = propTypes;

// Module exports
export default Avatar;
