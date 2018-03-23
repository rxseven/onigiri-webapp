// Module dependencies
import React from 'react';

import { Button, ButtonSet } from '../../../../../../components/shared/base/Buttons';
import { CardSubtitle } from '../../../../../../components/shared/base/Card';
import JSXwrapper from '../../../../../../components/shared/helpers/JSXwrapper';
import Render from '../../../../../../components/shared/helpers/Render';

// Constants
import PROP_TYPES from '../../../../../../constants/models/propTypes';
import STATE_MODELS from '../../../../../../constants/models/state';
import CSS from '../../../../../../constants/string/css';

// Declare prop types and default props
const propTypes = PROP_TYPES.pattern.asynchronous;
const defaultProps = STATE_MODELS.pattern.asynchronous;

// Component
const Recipients = ({ actions, state: { data, ui: { asynchronous } } }) => {
  // Variables
  const { error, loading } = asynchronous;

  // View
  return (
    <JSXwrapper>
      <hr />
      <CardSubtitle options={CSS.margin.MB04}>Recipients</CardSubtitle>
      <Render condition={!data}>
        <ButtonSet options={error && CSS.margin.MB04}>
          <Button
            button="outline-primary"
            disabled={loading}
            handler={actions.getRecipients}
            size="small"
          >
            View recipient list
          </Button>
        </ButtonSet>
      </Render>
    </JSXwrapper>
  );
};

// Specify prop types and default values for props
Recipients.propTypes = propTypes;
Recipients.defaultProps = defaultProps;

// Module exports
export default Recipients;
