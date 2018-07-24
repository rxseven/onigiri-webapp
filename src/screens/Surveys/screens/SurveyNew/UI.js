// Module dependencies
import cx from 'classnames';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form/immutable';

import { Body, Document, Head, Title } from 'components/common/Document';
import { FormHL } from 'components/common/Form';
import Icon from 'components/common/Icon';
import Layout from 'components/common/Layout';
import { Tip, TipHeader } from 'components/common/Tip';

// Constants
import CSS from 'constants/string/css';

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

  // Render tips
  renderTips = () => (
    <Tip end>
      <TipHeader>
        <Icon name="star" title="Tips" /> Demo tips
      </TipHeader>
      <ul className="list-flat">
        <li>
          <strong>Recipient list</strong> must be a list of REAL email addresses, please provide at
          least two emails.
        </li>
        <li>
          <strong>From</strong> and <strong>Landing page</strong> are optional.
        </li>
      </ul>
      <hr />
      <TipHeader>
        <Icon name="beaker" title="Notes" /> Notes
      </TipHeader>
      <ul className="list-flat">
        <li>
          Onigiri is restricted to sending <strong>100 emails per day</strong>, please help me save
          the limits, trying with <strong>2-5 recipient emails</strong> are appropriate numbers.
        </li>
        <li>
          In case you won’t get any email survey (please double check your junk box), this would
          mean the limits are already reached.
        </li>
      </ul>
    </Tip>
  );

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
            {this.renderTips()}
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
