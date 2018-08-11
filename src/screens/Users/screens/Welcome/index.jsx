// @flow
// Module dependencies
import * as React from 'react';

// Components
import { Button } from 'components/common/Buttons';
import { Body, Document, Head, Title } from 'components/common/Page';
import { Hero, HeroBody, HeroHeader } from 'components/common/Hero';
import Layout from 'components/common/Layout';
import Text from 'components/common/Text';

// Constants
import PATHS from 'constants/router/paths';

// Static types
type Return = React.Element<typeof Document>;

// Component
const Welcome = (): Return => (
  <Document>
    <Head>
      <Title>Welcome to Onigiri</Title>
    </Head>
    <Body>
      <Layout>
        <Hero>
          <HeroHeader>Welcome to Onigiri</HeroHeader>
          <HeroBody>
            <Text lead>Create a survey as easily as creating a blog post</Text>
            <Text lead>Send professional looking surveys to customers</Text>
            <Text lead>Analyze responses with automatic summaries</Text>
            <hr />
            <Button button="primary" link={PATHS.surveys.list} type="link">
              Get started!
            </Button>
          </HeroBody>
        </Hero>
      </Layout>
    </Body>
  </Document>
);

// Module exports
export default Welcome;
