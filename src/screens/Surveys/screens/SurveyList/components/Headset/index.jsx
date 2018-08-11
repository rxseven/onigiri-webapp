// @flow
// Module dependencies
import * as React from 'react';

// Components and HOCs
import { Button } from 'components/common/Buttons';

// Constants
import PATHS from 'constants/router/paths';

// Companion files
import './styles.scss';

// Static types
type Return = React.Element<'div'>;

// Component
const Headset = (): Return => (
  <div styleName="headset">
    <h2 styleName="headline">Your surveys</h2>
    <Button
      button="primary"
      icon="envelope-closed"
      link={PATHS.surveys.new}
      size="small"
      title="Create Survey"
      type="link"
    >
      Create Survey
    </Button>
  </div>
);

// Module exports
export default Headset;
