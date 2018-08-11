// @flow
// Module dependencies
import * as React from 'react';

// Helper functions
import dateHelper from 'helpers/date';

// Components and HOCs
import { Button, ButtonGroup, ButtonHandler, ButtonToolbar } from 'components/common/Buttons';
import Spinner from 'components/common/Spinner';

// Constants
import STATE_MODELS from 'constants/models/state';

// Types
import type { Asynchronous } from 'types/common/state';
import type { Survey } from '../../data/survey/types';

// Companion files
import './styles.scss';

// Static types
type Props = {
  actions: {
    back: Function,
    delete: Function,
    reload: Function,
    update: Function
  },
  state: {
    data: {
      survey: Survey
    },
    ui: {
      asynchronous: {
        get: {
          survey: Asynchronous
        },
        patch: {
          survey: Asynchronous
        }
      }
    },
    status: {
      updated: boolean
    }
  }
};

type Return = React.Element<typeof ButtonToolbar>;

// Default props
const defaultProps = STATE_MODELS.wrapper.asynchronous({
  get: {
    survey: { ...STATE_MODELS.model.asynchronous }
  },
  patch: {
    survey: { ...STATE_MODELS.model.asynchronous }
  }
});

// Component
const Toolbar = ({
  actions,
  state: { data: { survey }, ui: { asynchronous }, status }
}: Props): Return => {
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
        <React.Fragment>
          <div styleName="status">
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
        </React.Fragment>
      </If>
    </ButtonToolbar>
  );
};

// Specify default values for props
Toolbar.defaultProps = defaultProps;

// Module exports
export default Toolbar;
