// Module dependencies
import cx from 'classnames';
import React from 'react';

// Peer dependencies
import styles from './styles.scss';

// Component
const Sidebar = ({
  actions, state: {
    isSticky, css, mode, screenWidth
  }
}) => (
  <div className={cx(styles.sidebar, isSticky ? styles.isSticky : false)} style={css}>
    <div className={styles.wrapper}>
      <div className={styles.list}>Menu</div>
    </div>
    <div className={styles.fade} />
  </div>
);

// Module exports
export default Sidebar;
