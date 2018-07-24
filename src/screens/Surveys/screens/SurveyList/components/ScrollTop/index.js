// Module dependencies
import React from 'react';
import ScrollToTop from 'react-scroll-up';

import Icon from 'components/common/Icon';

// Peer dependencies
import styles from './styles.scss';

// Configuration
const options = {
  showUnder: 160,
  style: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0
  }
};

// Component
const ScrollTop = () => (
  <div className={styles.wrapper}>
    <div className={styles.pin}>
      <ScrollToTop {...options}>
        <span className={styles.button}>
          <Icon name="data-transfer-upload" title="Scroll Top" />
        </span>
      </ScrollToTop>
    </div>
  </div>
);

// Module exports
export default ScrollTop;
