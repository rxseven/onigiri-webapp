// @flow
// Module dependencies
import * as React from 'react';

// Components and HOCs
import Alert from 'components/common/Alert';

// Static types
type Props = {
  alert: {
    message: string
  }
};

type Return = React.Element<typeof Alert>;

// Component
const Error = ({ alert }: Props): Return => (
  <Alert>
    <strong>Oops!</strong> {alert.message}
  </Alert>
);

// Module exports
export default Error;
