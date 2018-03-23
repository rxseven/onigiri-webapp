// Module dependencies
import PropTypes from 'prop-types';
import React from 'react';

import {
  Button,
  ButtonGroup,
  ButtonHandler,
  ButtonToolbar
} from '../../../../../../components/shared/base/Buttons';
import Loading from '../../../../../../components/shared/base/Loading';
import JSXwrapper from '../../../../../../components/shared/helpers/JSXwrapper';
import Render from '../../../../../../components/shared/helpers/Render';

import dateHelper from '../../../../../../helpers/date';

// Constants
import PROP_TYPES from '../../../../../../constants/models/propTypes';
import STATE_MODELS from '../../../../../../constants/models/state';

// Peer dependencies
import styles from './styles.scss';

// Declare prop types and default props
const propTypes = PROP_TYPES.wrapper.asynchronous({
  get: PropTypes.shape({
    survey: PROP_TYPES.model.asynchronous
  })
});

const defaultProps = STATE_MODELS.wrapper.asynchronous({
  get: {
    survey: { ...STATE_MODELS.model.asynchronous }
  }
});

// Component
const Toolbar = ({ actions, state: { data, ui: { asynchronous }, status } }) => {
  // Variables
  const { error, loading } = asynchronous.get.survey;
  const { loading: updating } = asynchronous.patch.survey;
  const processing = loading || updating;

  // View
  return (
    <ButtonToolbar label="Toolbar">
      <ButtonGroup label="Navigation" size="small">
        <Button disabled={processing} handler={actions.reload} icon="reload" title="Reload" />
      </ButtonGroup>

      <Render condition={!error}>
        <JSXwrapper>
          <div className={styles.status}>
            <Render condition={loading}>
              <Loading />
            </Render>
            <Render condition={!processing && status.updated}>
              <span>Updated {dateHelper.currentTime()}</span>
            </Render>
          </div>
          <ButtonGroup label="Actions" size="small">
            <ButtonHandler
              button={data.survey.completed ? 'primary' : 'secondary'}
              disabled={processing}
              handler={{ onClick: actions.update }}
              icon="check"
              title="Done"
              value={{ completed: !data.survey.completed }}
            />
            <Button
              disabled={processing || data.survey.locked}
              handler={actions.delete}
              icon="trash"
              title="Delete"
            />
          </ButtonGroup>
        </JSXwrapper>
      </Render>
    </ButtonToolbar>
  );
};

// Specify prop types and default values for props
Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

// Module exports
export default Toolbar;
