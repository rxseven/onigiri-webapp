// Module dependencies
import cx from 'classnames';
import React from 'react';

// Components and HOCs
import { Button } from 'components/common/Buttons';

// Constants
import PATHS from 'constants/router/paths';
import SCREENS from 'constants/sizing/screens';

// Companion files
import Menu from '../Menu';
import styles from './styles.scss';

// Component
const Sidebar = ({
  actions, state: {
    isSticky, css, mode, screenWidth
  }
}) => (
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
