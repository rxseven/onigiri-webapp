// Module dependencies
import { each } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';

import { signIn } from '../../../../../data/session/actions';
import { resetUI } from '../actions';
import { getUI } from '../reducer';

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

// Map state to props
const mapStateToProps = state => ({
  state: {
    ui: getUI(state)
  }
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators({ resetUI, signIn }, dispatch)
  }
});

// Connect component to application state
const container = connect(mapStateToProps, mapDispatchToProps)(SignInForm);

// Configure Redux Form
export default reduxForm({ form: 'signin', validate })(container);
