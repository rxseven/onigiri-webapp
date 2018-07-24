// Module dependencies
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { Button, ButtonGroup, ButtonHandler, ButtonToolbar } from 'components/common/Buttons';
import Spinner from 'components/common/Spinner';

import dateHelper from 'helpers/date';

// Constants
import PROP_TYPES from 'constants/models/propTypes';
import STATE_MODELS from 'constants/models/state';

// Peer dependencies
import styles from './styles.scss';

// Declare prop types and default props
const propTypes = PROP_TYPES.wrapper.asynchronous({
  get: PropTypes.shape({
    survey: PROP_TYPES.model.asynchronous
  }),
  patch: PropTypes.shape({
    survey: PROP_TYPES.model.asynchronous
  })
});

const defaultProps = STATE_MODELS.wrapper.asynchronous({
  get: {
    survey: { ...STATE_MODELS.model.asynchronous }
  },
  patch: {
    survey: { ...STATE_MODELS.model.asynchronous }
  }
});

// Component
const Toolbar = ({ actions, state: { data: { survey }, ui: { asynchronous }, status } }) => {
  // Variables
  const { error, loading } = asynchronous.get.survey;
  const { loading: updating } = asynchronous.patch.survey;
  const processing = loading || updating;
  const { archived, completed, locked } = survey || false;

  // View
  return (
    <ButtonToolbar label="Toolbar">
      <ButtonGroup label="Navigation" size="small">
        <Button disabled={processing} handler={actions.back} icon="chevron-left" title="Back">
          List
        </Button>
        <Button disabled={processing} handler={actions.reload} icon="reload" title="Reload" />
      </ButtonGroup>

      <If condition={!error}>
        <Fragment>
          <div className={styles.status}>
            <If condition={loading}>
              <Spinner loading />
            </If>
            <If condition={updating}>
              <Spinner />
            </If>
            <If condition={!processing && status.updated}>
              <span>Updated {dateHelper.currentTime()}</span>
            </If>
          </div>
          <ButtonGroup label="Actions" size="small">
            <ButtonHandler
              button={completed ? 'primary' : 'secondary'}
              disabled={processing}
              handler={{ onClick: actions.update }}
              icon="check"
              title="Done"
              value={{ completed: !completed }}
            />
            <ButtonHandler
              button={archived ? 'primary' : 'secondary'}
              disabled={processing}
              handler={{ onClick: actions.update }}
              icon="box"
              title="Archive"
              value={{ archived: !archived }}
            />
            <Button
              disabled={processing || locked}
              handler={actions.delete}
              icon="trash"
              title="Delete"
            />
          </ButtonGroup>
        </Fragment>
      </If>
    </ButtonToolbar>
  );
};

// Specify prop types and default values for props
Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

// Module exports
export default Toolbar;
