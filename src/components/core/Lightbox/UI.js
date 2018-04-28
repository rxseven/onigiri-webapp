// Module dependencies
import React from 'react';

import Overlay from '../../shared/base/Overlay';
import Spinner from '../../shared/base/Spinner';

// Peer dependencies
import styles from './styles.scss';

// Component
const UI = ({ state: { data } }) => (
  <If condition={data.session.loading.verify}>
    <Overlay>
      <div className={styles.logo} />
      <div className={styles.spinner}>
        <Spinner loading />
      </div>
    </Overlay>
  </If>
);

// Module exports
export default UI;
