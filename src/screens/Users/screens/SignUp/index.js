// Module dependencies
import React from 'react';

import { Body, Document, Head, Title } from '../../../../components/shared/base/Document';
import { FormHL } from '../../../../components/shared/base/Form';
import Layout from '../../../Users/components/Layout';

// Component
const SignUp = () => (
  <Document>
    <Head>
      <Title>Create new Onigiri account</Title>
    </Head>
    <Body>
      <Layout>
        <FormHL>Create new account</FormHL>
      </Layout>
    </Body>
  </Document>
);

// Module exports
export default SignUp;
