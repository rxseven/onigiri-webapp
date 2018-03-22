// Module dependencies
import cx from 'classnames';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import { Body, Document, Head, Title } from '../../../../components/shared/base/Document';
import { FormHL } from '../../../../components/shared/base/Form';
import Layout from '../../../../components/shared/base/Layout';

// Constants
import CSS from '../../../../constants/string/css';

// Component
class UI extends Component {
  render() {
    return (
      <Document>
        <Head>
          <Title>Create Survey</Title>
        </Head>
        <Body>
          <Layout size={cx(CSS.grid.col.MD08, CSS.grid.col.LG06)}>
            <FormHL>Create survey</FormHL>
          </Layout>
        </Body>
      </Document>
    );
  }
}

// Configure Redux Form
const container = reduxForm({
  form: 'survey',
  destroyOnUnmount: true
})(UI);

// Module exports
export default container;