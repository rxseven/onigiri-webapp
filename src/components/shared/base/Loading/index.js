// Module dependencies
import { ThreeBounce } from 'better-react-spinkit';
import React from 'react';

// Peer dependencies
import styles from './styles.scss';

// Component
const Loading = () => {
  // Options
  const options = {
    color: '#999',
    duration: '1.25s',
    gutter: 6,
    size: 7
  };

  // View
  return (
    <div className={styles.wrapper}>
      <ThreeBounce {...options} />
    </div>
  );
};

// Module exports
export default Loading;
