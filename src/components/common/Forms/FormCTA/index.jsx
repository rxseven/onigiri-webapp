// @flow
// Module dependencies
import * as React from 'react';

// Components and HOCs
import { Button } from 'components/common/Buttons';
import withCTA from 'HOCs/composite/withCTA';

// Static types
type Props = {
  loading: boolean,
  cancelButton: React.Node,
  pristine: boolean,
  spinner: boolean,
  submitButton: string
};

type Return = React.Node;

// Component
export const FormCTA = ({
  cancelButton,
  loading,
  pristine,
  spinner,
  submitButton
}: Props): Return => (
  <React.Fragment>
    {cancelButton}
    <Button button="primary" disabled={pristine || (spinner && loading)} type="submit">
      {submitButton}
    </Button>
  </React.Fragment>
);

// Enhance a component with fetch functionality
const Enhanced = withCTA(FormCTA);

// Module exports
export default Enhanced;
