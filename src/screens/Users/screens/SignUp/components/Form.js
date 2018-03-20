// Module dependencies
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import { Form } from '../../../../../components/shared/base/Form';

// Peer dependencies
import FIELDS from '../constants/fields';

// Component
class SignUpForm extends Component {
  render() {
    return <Form {...this.props} fields={FIELDS} submitButton="Sign up" />;
  }
}

// Configure Redux Form
export default reduxForm({ form: 'signup' })(SignUpForm);
