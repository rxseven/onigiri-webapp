// Module dependencies
import cx from 'classnames';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import { Body, Document, Head, Title } from '../../../../components/shared/base/Document';
import { FormHL } from '../../../../components/shared/base/Form';
import Layout from '../../../../components/shared/base/Layout';

// Constants
import CSS from '../../../../constants/string/css';

// Peer dependencies
import Form from './components/Form';
import Review from './components/Review';

// Component
class UI extends Component {
  // Initial state
  state = { isReview: false };

  // Toggle form view
  onToggleView = (visibility) => {
    this.setState({ isReview: visibility });
  };

  // Render content
  renderContent = () => {
    if (this.state.isReview) {
      return <Review onCancel={() => this.onToggleView(false)} />;
    }

    return <Form onReview={() => this.onToggleView(true)} />;
  };

  // Render component
  render() {
    return (
      <Document>
        <Head>
          <Title>Create Survey</Title>
        </Head>
        <Body>
          <Layout size={cx(CSS.grid.col.MD08, CSS.grid.col.LG06)}>
            <FormHL>Create survey</FormHL>
            {this.renderContent()}
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
