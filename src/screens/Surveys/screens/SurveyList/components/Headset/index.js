// Module dependencies
import React from 'react';

import { Button } from '../../../../../../components/common/Buttons';

// Constants
import PATHS from '../../../../../../constants/router/paths';

// Peer dependencies
import styles from './styles.scss';

// Component
const Headset = () => (
  <div className={styles.headset}>
    <h2 className={styles.headline}>Your surveys</h2>
    <Button
      button="primary"
      icon="envelope-closed"
      link={PATHS.surveys.new}
      size="small"
      title="Create Survey"
      type="link"
    >
      Create Survey
    </Button>
  </div>
);

// Module exports
export default Headset;
