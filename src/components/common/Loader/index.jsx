// @flow
// Module dependencies
import * as React from 'react';

// Helper functions
import windowHelper from 'helpers/window';

// Components and HOCs
import { Button } from 'components/common/Buttons';
import { Card, CardBody, CardHeader, CardText } from 'components/common/Card';
import Spinner from 'components/common/Spinner';

// Companion files
import Wrapper from './Wrapper';
import './styles.scss';

// Static types
type Props = {
  error: ?mixed,
  pastDelay: boolean,
  timedOut: boolean
};

type Return = React.Element<typeof Wrapper> | React.Element<typeof Spinner> | null;

// Component
const Loader = (props: Props): Return => {
  // When the loader has errored
  if (props.error) {
    return (
      <Wrapper>
        <Card>
          <CardHeader>Sorry</CardHeader>
          <CardBody>
            <CardText>Something went wrong, please reload a webpage.</CardText>
            <Button button="primary" handler={() => windowHelper.reload()}>
              Reload
            </Button>
          </CardBody>
        </Card>
      </Wrapper>
    );
  }

  // When the loader has taken longer than the timeout
  if (props.timedOut) {
    return (
      <Wrapper>
        <Spinner loading />
        <div styleName="timeout">
          <p>Please take a moment</p>
        </div>
      </Wrapper>
    );
  }

  // When the loader has taken longer than the delay
  if (props.pastDelay) {
    return <Spinner loading />;
  }

  // When the loader has just started
  return null;
};

// Module exports
export default Loader;
