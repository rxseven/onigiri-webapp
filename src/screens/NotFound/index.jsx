// @flow
// Module dependencies
import * as React from 'react';

// Components and HOCs
import { Card, CardBody, CardLink, CardText, CardTitle } from 'components/common/Card';
import { Body, Document, Head, Title } from 'components/common/Page';
import Layout from 'components/common/Layout';

// Constants
import PATHS from 'constants/router/paths';

// Static types
type Return = React.Element<typeof Document>;

// Component
const NotFound = (): Return => (
  <Document>
    <Head>
      <Title>Page Not Found</Title>
    </Head>
    <Body>
      <Layout>
        <Card>
          <CardBody>
            <CardTitle>404</CardTitle>
            <CardText>This is not webpage you are looking for.</CardText>
            <CardLink link={PATHS.root}>Go back to Home page</CardLink>
          </CardBody>
        </Card>
      </Layout>
    </Body>
  </Document>
);

// Module exports
export default NotFound;
