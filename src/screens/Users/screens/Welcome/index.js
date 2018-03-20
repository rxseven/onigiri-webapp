// Module dependencies
import React from 'react';

import { Button } from '../../../../components/shared/base/Buttons';
import { Body, Document, Head, Title } from '../../../../components/shared/base/Document';
import { Hero, HeroBody, HeroHeader } from '../../../../components/shared/base/Hero';
import Layout from '../../../../components/shared/base/Layout';
import Text from '../../../../components/shared/base/Text';

// Constants
import PATHS from '../../../../constants/router/paths';

// Component
const Welcome = () => (
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
            <Button button="primary" link={PATHS.root} type="link">
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