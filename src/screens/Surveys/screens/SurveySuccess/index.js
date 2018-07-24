// Module dependencies
import React from 'react';

import { Button } from '../../../../components/common/Buttons';
import { Body, Document, Head, Title } from '../../../../components/common/Document';
import Icon from '../../../../components/common/Icon';
import { Card, CardBody, CardHeader } from '../../../../components/common/Card';
import Layout from '../../../../components/common/Layout';

// Constants
import PATHS from '../../../../constants/router/paths';

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
        <Card alignment="text-center" end>
          <CardHeader>Success</CardHeader>
          <CardBody>
            <div className={styles.symbol}>
              <Icon name="circle-check" title="Success" />
            </div>
            <p>
              <strong>{state.title}</strong> has been created successfully.<br /> Onigiri will send
              the survey to <strong>{state.recipients}</strong> recipient{state.recipients > 1 &&
                's'}{' '}
              shortly.
            </p>
            <div className={styles.actions}>
              <Button button="primary" link={`${PATHS.surveys.base}/${state.id}`} type="link">
                View survey details
              </Button>
            </div>
          </CardBody>
        </Card>
      </Layout>
    </Body>
  </Document>
);

// Module exports
export default SurveySuccess;
