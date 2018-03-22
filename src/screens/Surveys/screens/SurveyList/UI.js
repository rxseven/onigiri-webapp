// Module dependencies
import cx from 'classnames';
import React, { Component } from 'react';

import { Body, Document, Head, Title } from '../../../../components/shared/base/Document';
import Layout from '../../../../components/shared/base/Layout';

// Constants
import CSS from '../../../../constants/string/css';

// Component
class UI extends Component {
  render() {
    return (
      <Document>
        <Head>
          <Title>Surveys</Title>
        </Head>
        <Body>
          <Layout size={cx(CSS.grid.col.MD12, CSS.grid.col.LG10)}>SurveyList component</Layout>
        </Body>
      </Document>
    );
  }
}

// Module exports
export default UI;
