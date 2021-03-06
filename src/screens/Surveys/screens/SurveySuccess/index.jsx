// @flow
// Module dependencies
import * as React from 'react';

// Components and HOCs
import { Button } from 'components/common/Buttons';
import { Body, Document, Head, Title } from 'components/common/Page';
import Icon from 'components/common/Icon';
import { Card, CardBody, CardHeader } from 'components/common/Card';
import Layout from 'components/common/Layout';

// Constants
import PATHS from 'constants/router/paths';

// Companion files
import './styles.scss';

// Static types
type Props = {
  location: {
    state: {
      id: string,
      recipients: number,
      title: string
    }
  }
};

type Return = React.Element<typeof Document>;

// Component
const SurveySuccess = ({ location: { state } }: Props): Return => (
  <Document>
    <Head>
      <Title>Create Survey - Success</Title>
    </Head>
    <Body>
      <Layout>
        <Card alignment="text-center" end>
          <CardHeader>Success</CardHeader>
          <CardBody>
            <div styleName="symbol">
              <Icon name="circle-check" title="Success" />
            </div>
            <p>
              <strong>{state.title}</strong> has been created successfully.<br /> Onigiri will send
              the survey to <strong>{state.recipients}</strong> recipient{state.recipients > 1 &&
                's'}{' '}
              shortly.
            </p>
            <div styleName="actions">
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
