// Module dependencies
import React from 'react';

import { Body, Document, Head, Title } from '../../../../components/shared/base/Document';
import Icon from '../../../../components/shared/base/Icon';
import { Card, CardBody, CardHeader } from '../../../../components/shared/base/Card';
import Layout from '../../../../components/shared/base/Layout';

// Peer dependencies
import styles from './styles.scss';

// Component
const SurveySuccess = ({ location: { state } }) => (
  <Document>
    <Head>
      <Title>Create Survey - Success</Title>
    </Head>
    <Body>
      <Layout>
        <Card alignment="text-center">
          <CardHeader>Success</CardHeader>
          <CardBody>
            <div className={styles.symbol}>
              <Icon name="circle-check" title="Success" />
            </div>
            <p>
              <strong>{state.title}</strong> has been created successfully.<br /> The survey will be
              sent out to <strong>{state.recipients}</strong> recipient{state.recipients > 1 && 's'}{' '}
              shortly.
            </p>
          </CardBody>
        </Card>
      </Layout>
    </Body>
  </Document>
);

// Module exports
export default SurveySuccess;
