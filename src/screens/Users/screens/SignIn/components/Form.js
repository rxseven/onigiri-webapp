// Module dependencies
import { each } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { Form } from '../../../../../components/shared/base/Form';
import validationHelper from '../../../../../helpers/validation';

// Peer dependencies
import FIELDS from '../constants/fields';

// Component
class SignInForm extends Component {
  render() {
    return <Form {...this.props} fields={FIELDS} submitButton="Sign in" />;
  }
}

// Error validation rules
const validate = (values) => {
  // Initial errors object
  const errors = {};

  // Validate email
  errors.email = validationHelper.email(values.email);

  // Iterates over elements of collection and validate value for each element
  each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
};

// Connect component to application state
const container = connect(null)(SignInForm);

// Configure Redux Form
export default reduxForm({ form: 'signin', validate })(container);
