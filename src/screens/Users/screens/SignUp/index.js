// Module dependencies
import React from 'react';
import { Link } from 'react-router-dom';

import { Body, Document, Head, Title } from '../../../../components/shared/base/Document';
import { FormHL, FormMeta } from '../../../../components/shared/base/Form';
import Icon from '../../../../components/shared/base/Icon';
import { Tip, TipHeader } from '../../../../components/shared/base/Tip';
import Layout from '../../../Users/components/Layout';

// Constants
import PATHS from '../../../../constants/router/paths';

// Peer dependencies
import Form from './components/Form';

// Component
const SignUp = () => (
  <Document>
    <Head>
      <Title>Create new Onigiri account</Title>
    </Head>
    <Body>
      <Layout>
        <FormHL>Create new account</FormHL>
        <Form />
        <FormMeta>
          <Link to={PATHS.users.signin}>Already have an account?</Link>
        </FormMeta>

        <Tip end>
          <TipHeader>
            <Icon name="star" title="Tips" /> Demo tips
          </TipHeader>
          <p>
            There is no need to use real email address to create an account, any fake one is fine
            e.g. <code>fake@mail.io</code>.
          </p>
        </Tip>
      </Layout>
    </Body>
  </Document>
);

// Module exports
export default SignUp;
