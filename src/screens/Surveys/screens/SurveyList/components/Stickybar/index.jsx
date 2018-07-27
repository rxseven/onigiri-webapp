// Module dependencies
import React from 'react';
import { Sticky } from 'react-sticky';

// Constants
import SCREENS from 'constants/sizing/screens';

// Companion files
import Sidebar from '../Sidebar';
import './styles.scss';

// Component
const Stickybar = ({ actions, state }) => (
  <div styleName="wrapper">
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

        // Sidebar
        return (
          <div>
            <Sidebar actions={actions} state={{ ...state, css, isSticky }} />
          </div>
        );
      }}
    </Sticky>
  </div>
);

// Module exports
export default Stickybar;
