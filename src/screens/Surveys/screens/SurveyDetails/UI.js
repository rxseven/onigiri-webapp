// Module dependencies
import React, { Component } from 'react';

import { Body, Document, Head, Title } from '../../../../components/shared/base/Document';
import Layout from '../../../../components/shared/base/Layout';

// Component
class UI extends Component {
  render() {
    return (
      <Document>
        <Head>
          <Title>Survey</Title>
        </Head>
        <Body>
          <Layout>SurveyDetails screen</Layout>
        </Body>
      </Document>
    );
  }
}

// Module exports
export default UI;
