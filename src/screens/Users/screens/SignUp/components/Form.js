// Module dependencies
import { each } from 'lodash';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import { Form } from '../../../../../components/shared/base/Form';
import validationHelper from '../../../../../helpers/validation';

// Peer dependencies
import FIELDS from '../constants/fields';

// Component
class SignUpForm extends Component {
  render() {
    return <Form {...this.props} fields={FIELDS} submitButton="Sign up" />;
  }
}

// Error validation rules
const validate = (values) => {
  // Initial errors object
  const errors = {};

  // Validate first name
  if (values.firstName) {
    errors.firstName = validationHelper.name(values.firstName);
  }

  // Validate last name
  if (values.lastName) {
    errors.lastName = validationHelper.name(values.lastName);
  }

  // Validate email
  errors.email = validationHelper.email(values.email);

  // Validate password
  if (values.password) {
    errors.password = validationHelper.password(values.password);
  }

  // Compare password
  if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'Passwords must match';
  }

  // Iterates over elements of collection and validate value for each element
  each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
};

// Warning validation rules
const warn = (values) => {
  // Initial warnings object
  const warnings = {};

  // Check password length
  if (values.password && values.password.length > 12) {
    warnings.password = 'Hmm, your password seem a bit long... (keep it less than 12 characters)';
  }

  return warnings;
};

// Configure Redux Form
export default reduxForm({
  form: 'signup',
  validate,
  warn
})(SignUpForm);
