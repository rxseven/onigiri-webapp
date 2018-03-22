// Module dependencies
import { each } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';

import { Button } from '../../../../../components/shared/base/Buttons';
import { Card, CardBody, CardHeader, CardText } from '../../../../../components/shared/base/Card';
import { Form, FormSHL } from '../../../../../components/shared/base/Form';
import Loading from '../../../../../components/shared/base/Loading';
import Confirm from '../../../../../components/shared/extended/Confirm';
import JSXwrapper from '../../../../../components/shared/helpers/JSXwrapper';

import { getCredits } from '../../../../../data/credits/actions';
import { getBalance } from '../../../../../data/credits/reducer';
import * as modalActions from '../../../../../data/interfaces/modal/actions';
import { getModal } from '../../../../../data/interfaces/modal/reducer';
import validationHelper from '../../../../../helpers/validation';

// Constants
import PATHS from '../../../../../constants/router/paths';

// Peer dependencies
import FIELDS from '../constants/fields';

// Component
class SurveyForm extends Component {
  // After a component is mounted...
  componentDidMount() {
    // Get credits
    this.getCredits();
  }

  // Request for cancelling form
  onCancelFormRequest = () => {
    // Verify form values
    if (this.props.pristine) {
      // If the form is clean, navigate away
      this.onLeave();
    } else {
      // If the form has values, show a confirmation modal
      this.props.actions.modal.openModal();
    }
  };

  // Confirm cancelling form
  onCancelFormConfirm = () => {
    // Close a modal
    this.props.actions.modal.closeModal();

    // Navigate away
    this.onLeave();
  };

  // Navigate to survey list view screen
  onLeave = () => {
    // TODO 1. Create survey list view screen
    // TODO 2. Navigate to survey list view screen
    this.props.history.push(PATHS.root);
  };

  // Get credits
  getCredits = () => {
    if (this.props.state.data.balance == null) {
      this.props.actions.credits.getCredits();
    }
  };

  // Render content
  renderContent = () => (
    <div>
      <FormSHL>Please enter your entries</FormSHL>
      <Form
        {...this.props}
        alert={false}
        cancelButton={<Button handler={this.onCancelFormRequest}>Cancel</Button>}
        fields={FIELDS}
        spinner={false}
        submitButton="Next"
        submitCallback={false}
        submitFunction={this.props.onReview}
      />
      <Confirm
        alert={false}
        buttonCancel="Cancel"
        buttonConfirm="Discard"
        onClose={this.props.actions.modal.closeModal}
        onConfirm={this.onCancelFormConfirm}
        spinner={false}
        title="Cancel Creating Survey"
        visibility={this.props.state.data.interfaces.modal.isOpen}
      >
        <h5>All your progress will be lost</h5>
        <p>Are you sure you don&apos;t want to reconsider?</p>
      </Confirm>
    </div>
  );

  // Render loading state
  renderLoading = () => <Loading />;

  // Render warning message
  renderWarning = () => (
    <Card alignment="text-center">
      <CardHeader>Not enough credits</CardHeader>
      <CardBody>
        <CardText>Sorry, your credits are gone.</CardText>
        <Button
          button="primary"
          link={{ pathname: PATHS.users.profile, state: { from: this.props.location } }}
          type="link"
        >
          Add credits
        </Button>
      </CardBody>
    </Card>
  );

  // Render component
  render() {
    // Variables
    const { balance } = this.props.state.data;

    // View
    return (
      <JSXwrapper>
        {balance == null && this.renderLoading()}
        {balance != null && balance < 1 && this.renderWarning()}
        {balance != null && balance >= 1 && this.renderContent()}
      </JSXwrapper>
    );
  }
}

// Error validation rules
const validate = (values) => {
  // Initial errors object
  const errors = {};

  // Validate email
  errors.from = validationHelper.email(values.from);

  // Validate email addresses
  errors.recipients = validationHelper.emails(values.recipients);

  // Validate matching landing page's URL
  errors.landing = validationHelper.url(values.landing);

  // Validate matching landing page's protocol
  errors.landing = validationHelper.http(values.landing);

  // Iterates over elements of collection and validate value for each element
  each(FIELDS, ({ name, required }) => {
    if (required && !values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
};

// Warning validation rules
const warn = (values) => {
  // Initial warnings object
  const warnings = {};

  // From field
  if (!values.from) {
    warnings.from = 'Leaving it blank the default email will be applied';
  }

  // Landing page field
  if (!values.landing) {
    warnings.landing = 'Leaving it blank the default URL will be applied';
  }

  return warnings;
};

// Map state to props
const mapStateToProps = state => ({
  state: {
    data: {
      balance: getBalance(state),
      interfaces: {
        modal: getModal(state)
      }
    }
  }
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    credits: bindActionCreators({ getCredits }, dispatch),
    modal: bindActionCreators(modalActions, dispatch)
  }
});

// Connect component to application state
const container = withRouter(connect(mapStateToProps, mapDispatchToProps)(SurveyForm));

// Configure Redux Form
export default reduxForm({
  form: 'survey',
  destroyOnUnmount: false,
  validate,
  warn
})(container);
