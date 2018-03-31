// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Peer dependencies
import styles from './styles.scss';

// Declare prop types
const propTypes = exact({
  url: PropTypes.string.isRequired
});

// Component
const Avatar = ({ url }) => (
  <div className={cx('avatar', styles.wrapper)}>
    <img alt="Avtar" className={styles.photo} src={url} />
  </div>
);

// Specify prop types
Avatar.propTypes = propTypes;

// Module exports
export default Avatar;
