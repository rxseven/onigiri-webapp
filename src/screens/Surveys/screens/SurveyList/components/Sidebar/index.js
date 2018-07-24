// Module dependencies
import cx from 'classnames';
import React from 'react';

import { Button } from '../../../../../../components/common/Buttons';

// Constants
import PATHS from '../../../../../../constants/router/paths';
import SCREENS from '../../../../../../constants/sizing/screens';

// Peer dependencies
import Menu from '../Menu';
import styles from './styles.scss';

// Component
const Sidebar = ({
  actions, state: {
    isSticky, css, mode, screenWidth
  }
}) => (
  <div className={cx(styles.sidebar, isSticky ? styles.isSticky : false)} style={css}>
    <div className={styles.wrapper}>
      <div className={styles.list}>
        <Menu actions={actions} state={{ mode }} />
      </div>

      <div className={!isSticky && screenWidth >= SCREENS.small ? 'invisible' : styles.actions}>
        <Button
          button="primary"
          icon="envelope-closed"
          link={PATHS.surveys.new}
          size="small"
          title="Create Survey"
          type="link"
        >
          Create <span className={styles.hidden}>Survey</span>
        </Button>
      </div>
    </div>
    <div className={styles.fade} />
  </div>
);

// Module exports
export default Sidebar;
