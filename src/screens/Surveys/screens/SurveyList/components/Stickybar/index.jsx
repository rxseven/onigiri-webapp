// @flow
// Module dependencies
import * as React from 'react';
import { Sticky } from 'react-sticky';

// Constants
import SCREENS from 'constants/sizing/screens';

// Types
import type { Mode, Screen } from '../../types';

// Companion files
import Sidebar from '../Sidebar';
import './styles.scss';

// Static types
type Props = {
  actions: Object,
  state: {
    mode: Mode,
    screenWidth: Screen
  }
};

type Return = React.Element<'div'>;

// Component
const Stickybar = ({ actions, state }: Props): Return => (
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
