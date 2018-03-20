// Module dependencies
import React from 'react';

import { Body, Document, Head, Title } from '../../../../components/shared/base/Document';
import { FormHL } from '../../../../components/shared/base/Form';
import Layout from '../../../Users/components/Layout';

// Peer dependencies
import Form from './components/Form';

// Component
const SignIn = () => (
  <Document>
    <Head>
      <Title>Sign in to Onigiri</Title>
    </Head>
    <Body>
      <Layout>
        <FormHL>Sign in to Onigiri</FormHL>
        <Form />
      </Layout>
    </Body>
  </Document>
);

// Module exports
export default SignIn;