// Module dependencies
import { ThreeBounce } from 'better-react-spinkit';
import React from 'react';

import Overlay from '../../shared/base/Overlay';
import Render from '../../shared/helpers/Render';

// Peer dependencies
import styles from './styles.scss';

// Component
const UI = ({ state: { data } }) => (
  <Render condition={data.session.verifying}>
    <Overlay>
      <div className={styles.logo} />
      <div className={styles.spinner}>
        <ThreeBounce color="#999" duration="1.25s" gutter={6} size={6} />
      </div>
    </Overlay>
  </Render>
);

// Module exports
export default UI;
