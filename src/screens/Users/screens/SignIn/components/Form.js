// Module dependencies
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import { Form } from '../../../../../components/shared/base/Form';

// Peer dependencies
import FIELDS from '../constants/fields';

// Component
class SignInForm extends Component {
  render() {
    return <Form {...this.props} fields={FIELDS} submitButton="Sign in" />;
  }
}

// Configure Redux Form
export default reduxForm({ form: 'signin' })(SignInForm);
