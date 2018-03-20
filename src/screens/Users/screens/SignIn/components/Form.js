// Module dependencies
import { each } from 'lodash';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';

import { signIn } from '../../../../../data/session/actions';
import { resetUI } from '../actions';
import { getUI } from '../reducer';

import { Form } from '../../../../../components/shared/base/Form';
import validationHelper from '../../../../../helpers/validation';

// Constants
import PATHS from '../../../../../constants/router/paths';

// Peer dependencies
import FIELDS from '../constants/fields';

// Component
class SignInForm extends Component {
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
    // TODO: Navigate to Survey list screen after the form has been submitted
    console.log('Form has been submitted successfully');

    // FIXME: Replace this temporary implementation with TODO
    this.props.history.push({ pathname: PATHS.root });
  };

  // Render component
  render() {
    return (
      <Form
        {...this.props}
        asynchronous={this.props.state.ui.asynchronous.post}
        fields={FIELDS}
        submitButton="Sign in"
        submitCallback={this.submitCallback}
        submitFunction={this.props.actions.auth.signIn}
      />
    );
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
const container = withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInForm));

// Configure Redux Form
export default reduxForm({ form: 'signin', validate })(container);
