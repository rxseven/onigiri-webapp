// Module dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Components and HOCs
import { Body, Document, Head, Title } from 'components/common/Page';
import { FormHL, FormMeta, FormStack } from 'components/common/Forms';
import Icon from 'components/common/Icon';
import { Tip, TipHeader } from 'components/common/Tip';

// Constants
import PATHS from 'constants/router/paths';

// Companion files
import Layout from '../../../Users/components/Layout';
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
        <FormStack>
          <Form />
        </FormStack>
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
