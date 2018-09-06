// @flow
// Module dependencies
import * as React from 'react';

// Components and HOCs
import { Card, CardBody, CardHeader, CardText } from 'components/common/Card';
import ExLink from 'components/common/ExLink';
import withFetch from 'HOCs/composite/withFetch';

// Types
import type { URI } from '../../data/landing/types';

// Static types
type Props = {
  data: {
    landing: URI
  }
};

type Return = React.Element<typeof Card>;

// Component
export const Content = ({ data }: Props): Return => (
  <Card alignment="text-center">
    <CardHeader>Thank you for your feedback!</CardHeader>
    <CardBody>
      <CardText>We’re so glad you’re happy with our service.</CardText>
      <CardText>
        We’re grateful that you trust our service and will continue to do everything we can to offer
        you the best experience possible.
      </CardText>
      <If condition={!!data.landing.URI}>
        <ExLink button="primary" to={data.landing.URI || '#'} replace>
          View campaign
        </ExLink>
      </If>
    </CardBody>
  </Card>
);

// Enhance a component with fetch functionality
const Enhanced = withFetch(Content);

// Module exports
export default Enhanced;
