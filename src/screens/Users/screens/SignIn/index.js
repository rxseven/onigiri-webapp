// Module dependencies
import React from 'react';
import { Link } from 'react-router-dom';

import { Body, Document, Head, Title } from '../../../../components/shared/base/Document';
import { FormHL, FormMeta } from '../../../../components/shared/base/Form';
import Layout from '../../../Users/components/Layout';

// Constants
import PATHS from '../../../../constants/router/paths';

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
        <FormMeta>
          New to Onigiri? <Link to={PATHS.users.signup}>Create an account</Link>.
        </FormMeta>
      </Layout>
    </Body>
  </Document>
);

// Module exports
export default SignIn;
