// Module dependencies
import React, { Component } from 'react';
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
class SignIn extends Component {
  render() {
    return (
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

            <Tip end>
              <TipHeader>
                <Icon name="star" title="Tips" /> Demo tips
              </TipHeader>
              <p>Not ready to create a new accout? sure, you can play with the testing account:</p>
              <p>
                email: <code>skywalker@rxseven.com</code>
                <br />password: <code>R2D2s</code>
              </p>
            </Tip>
          </Layout>
        </Body>
      </Document>
    );
  }
}

// Module exports
export default SignIn;
