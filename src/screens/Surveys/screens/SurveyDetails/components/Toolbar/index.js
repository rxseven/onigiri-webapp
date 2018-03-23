// Module dependencies
import React from 'react';

import { ButtonGroup, ButtonToolbar } from '../../../../../../components/shared/base/Buttons';
import JSXwrapper from '../../../../../../components/shared/helpers/JSXwrapper';
import Render from '../../../../../../components/shared/helpers/Render';

// Peer dependencies
import styles from './styles.scss';

// Component
const Toolbar = ({ actions, state: { data, ui: { asynchronous }, status } }) => {
  // Variables
  const { error } = asynchronous.get.survey;

  // View
  return (
    <ButtonToolbar label="Toolbar">
      <ButtonGroup label="Navigation" size="small">
        Navigation
      </ButtonGroup>

      <Render condition={!error}>
        <JSXwrapper>
          <div className={styles.status}>Status</div>
          <ButtonGroup label="Actions" size="small">
            Actions
          </ButtonGroup>
        </JSXwrapper>
      </Render>
    </ButtonToolbar>
  );
};

// Module exports
export default Toolbar;
