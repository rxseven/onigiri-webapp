// @flow
// Module dependencies
import * as React from 'react';

// Components and HOCs
import { Body, Document, Head, Title } from 'components/common/Page';
import { Card, CardBody, CardLink, CardText, CardTitle } from 'components/common/Card';
import Layout from 'components/common/Layout';

// Constants
import PATHS from 'constants/router/paths';

// Static types
type Return = React.Element<typeof Document>;

// Component
const Farewell = (): Return => (
  <Document>
    <Head>
      <Title>Goodbye Onigiri</Title>
    </Head>
    <Body>
      <Layout>
        <Card end>
          <CardBody>
            <CardTitle>Goodbye</CardTitle>
            <CardText>Your account has been successfully deleted.</CardText>
            <CardLink link={PATHS.root}>Go back to home page</CardLink>
          </CardBody>
        </Card>
      </Layout>
    </Body>
  </Document>
);

// Module exports
export default Farewell;
