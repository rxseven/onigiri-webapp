// Module dependencies
import { each } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';

import { Form, FormSHL } from '../../../../../components/shared/base/Form';
import JSXwrapper from '../../../../../components/shared/helpers/JSXwrapper';

import validationHelper from '../../../../../helpers/validation';

// Peer dependencies
import FIELDS from '../constants/fields';

// Component
class SurveyForm extends Component {
  // Render content
  renderContent = () => (
    <div>
      <FormSHL>Please enter your entries</FormSHL>
      <Form
        {...this.props}
        alert={false}
        fields={FIELDS}
        spinner={false}
        submitButton="Next"
        submitCallback={false}
        submitFunction={undefined}
      />
    </div>
  );

  // Render component
  render() {
    return <JSXwrapper>{this.renderContent()}</JSXwrapper>;
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
  state: {}
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
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
