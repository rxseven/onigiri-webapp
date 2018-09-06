// @flow
// Module dependencies
import * as React from 'react';

// Components and HOCs
import { Button } from 'components/common/Buttons';
import withCTA from 'HOCs/composite/withCTA';

// Types
import type { Error, Fetched, Loading } from 'types/common/status';

// Static types
type Props = {
  actions: {
    getRecipients: Function
  },
  options: ?string,
  status: {
    error: Error,
    fetched: Fetched,
    loading: Loading
  }
};

type Return = React.Node;

// Enhance a component with fetch functionality
const Enhanced = withCTA(Button);

// Component
const CTA = (props: Props): Return => {
  // Variables
  const { actions, options, status } = props;

  // View
  return (
    <Enhanced
      button="outline-primary"
      options={options}
      disabled={status.loading}
      status={{ ...status }}
      handler={actions.getRecipients}
      size="small"
    >
      View recipient list
    </Enhanced>
  );
};

// Module exports
export default CTA;
