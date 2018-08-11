// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';
import { reduxForm } from 'redux-form/immutable';

// Components and HOCs
import { Body, Document, Head, Title } from 'components/common/Page';
import { FormHL } from 'components/common/Forms';
import Icon from 'components/common/Icon';
import Layout from 'components/common/Layout';
import { Tip, TipHeader } from 'components/common/Tip';

// Constants
import CSS from 'constants/string/css';

// Companion files
import Form from './components/Form';
import Review from './components/Review';

// Static types
type View = boolean;
type Props = {};
type State = { isReview: View };
type Return = React.Element<typeof Document>;

// Component
class UI extends React.Component<Props, State> {
  // Initial state
  state = { isReview: false };

  // Toggle form view
  onToggleView = (visibility: View): void => {
    this.setState({ isReview: visibility });
  };

  // Render content
  renderContent = (): React.Element<typeof Review | Form> => (
    <Choose>
      <When condition={this.state.isReview}>
        <Review onCancel={() => this.onToggleView(false)} />
      </When>
      <Otherwise>
        <Form onReview={() => this.onToggleView(true)} />
      </Otherwise>
    </Choose>
  );

  // Render tips
  renderTips = (): React.Element<typeof Tip> => (
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
  render(): Return {
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
