// @flow
// Module dependencies
import * as React from 'react';

// Components and HOCs
import { CardSubtitle } from 'components/common/Card';

// Helper function
import { generateStatus } from 'helpers/state';

// Constants
import STATE_MODELS from 'constants/models/state';
import CSS from 'constants/string/css';

// Types
import type { Asynchronous } from 'types/common/state';
import type { Recipient } from '../../data/survey/types';

// Companion files
import CTA from './CTA';
import Email from './Email';

// Static types
type Props = {
  actions: {
    getRecipients: Function
  },
  state: {
    data: ?Recipient,
    ui: {
      asynchronous: Asynchronous
    }
  }
};

type Return = React.Node;

// Default props
const defaultProps = STATE_MODELS.pattern.asynchronous;

// Component
const Recipients = ({ actions, state: { data, ui: { asynchronous } } }: Props): Return => {
  // Variables
  const { error, loading } = asynchronous;

  // Properties
  const properties = {
    cta: { status: { error: false, fetched: !!data, loading } },
    email: generateStatus(data, asynchronous, { loading: false })
  };

  // View
  return (
    <React.Fragment>
      <hr />
      <CardSubtitle options={CSS.margin.MB04}>Recipients</CardSubtitle>
      <CTA actions={actions} options={error && CSS.margin.MB03} {...properties.cta} />
      <Email data={data} {...properties.email} />
    </React.Fragment>
  );
};

// Specify default values for props
Recipients.defaultProps = defaultProps;

// Module exports
export default Recipients;
