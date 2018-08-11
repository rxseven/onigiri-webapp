// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Components and HOCs
import { Button } from 'components/common/Buttons';

// Constants
import PATHS from 'constants/router/paths';
import SCREENS from 'constants/sizing/screens';

// Types
import type { Mode, Screen } from '../../types';

// Companion files
import Menu from '../Menu';
import styles from './styles.scss';

// Static types
type Props = {
  actions: Object,
  state: {
    isSticky: boolean,
    css: {},
    mode: Mode,
    screenWidth: Screen
  }
};

type Return = React.Element<'div'>;

// Component
const Sidebar = ({
  actions, state: {
    isSticky, css, mode, screenWidth
  }
}: Props): Return => (
  <div style={css} styleName={cx('sidebar', isSticky && 'isSticky')}>
    <div styleName="wrapper">
      <div styleName="list">
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
          Create <span styleName="hidden">Survey</span>
        </Button>
      </div>
    </div>
    <div styleName="fade" />
  </div>
);

// Module exports
export default Sidebar;
