// Module dependencies
import React from 'react';

import { Body, Document, Head, Title } from '../../../../components/shared/base/Document';
import {
  Card,
  CardBody,
  CardLink,
  CardText,
  CardTitle
} from '../../../../components/shared/base/Card';
import Layout from '../../../../components/shared/base/Layout';

// Constants
import PATHS from '../../../../constants/router/paths';

// Component
const Farewell = () => (
  <Document>
    <Head>
      <Title>Goodbye Onigiri</Title>
    </Head>
    <Body>
      <Layout>
        <Card>
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
