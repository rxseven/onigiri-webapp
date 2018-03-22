// Module dependencies
import React from 'react';
import { Sticky } from 'react-sticky';

// Constants
import SCREENS from '../../../../../../constants/sizing/screens';

// Peer dependencies
import styles from './styles.scss';

// Component
const Stickybar = ({ actions, state }) => (
  <div className={styles.wrapper}>
    <Sticky topOffset={-64}>
      {({ isSticky, style }) => {
        // Base styles
        let css = { ...style };

        // Small viewport's styles
        if (state.screenWidth < SCREENS.small) {
          css = {
            ...style,
            left: 0,
            position: 'fixed',
            width: '100%'
          };
        }

        // FIXME: debugging console log, please remove
        console.log('Stickybar CSS :', css);

        // Sidebar
        return <div>Sidebar</div>;
      }}
    </Sticky>
  </div>
);

// Module exports
export default Stickybar;
