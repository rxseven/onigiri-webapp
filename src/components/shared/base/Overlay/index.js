// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Peer dependencies
import styles from './styles.scss';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired
});

// Component
const Overlay = ({ children }) => (
  <div className={styles.wrapper}>
    <div className={styles.content}>{children}</div>
  </div>
);

// Specify prop types
Overlay.propTypes = propTypes;

// Module exports
export default Overlay;
