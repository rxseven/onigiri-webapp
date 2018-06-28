// Module dependencies
import { each } from 'lodash';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';

import { signUp } from '../../../../../data/session/actions';
import { resetUI } from '../actions';
import { getUI } from '../reducers';

import { Form } from '../../../../../components/shared/base/Form';
import validationHelper from '../../../../../helpers/validation';

// Constants
import PATHS from '../../../../../constants/router/paths';

// Peer dependencies
import FIELDS from '../constants/fields';

// Component
class SignUpForm extends Component {
  // Before a component is unmounted and destroyed...
  componentWillUnmount() {
    // Reset UI state
    this.onReset();
  }

  // Reset UI state
  onReset = () => {
    this.props.actions.auth.resetUI();
  };

  // Form submission callback
  submitCallback = () => {
    // Redirect to Welcome screen after the form has been submitted
    this.props.history.push({
      pathname: PATHS.users.welcome,
      state: {
        referrer: true
      }
    });
  };

  // Render component
  render() {
    return (
      <Form
        {...this.props}
        asynchronous={this.props.state.ui.asynchronous.post}
        fields={FIELDS}
        submitButton="Sign up"
        submitCallback={this.submitCallback}
        submitFunction={this.props.actions.auth.signUp}
      />
    );
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

// Map state to props
const mapStateToProps = state => ({
  state: {
    ui: getUI(state)
  }
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators({ resetUI, signUp }, dispatch)
  }
});

// Connect component to application state
const container = withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpForm));

// Configure Redux Form
export default reduxForm({
  form: 'signup',
  validate,
  warn
})(container);
