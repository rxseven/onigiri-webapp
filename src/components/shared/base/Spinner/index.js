// Module dependencies
import { FadingCircle } from 'better-react-spinkit';
import React from 'react';

// Peer dependencies
import styles from './styles.scss';

// Component
const Spinner = () => (
  <div className={styles.wrapper}>
    <FadingCircle />
  </div>
);

// Module exports
export default Spinner;
