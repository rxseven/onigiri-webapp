// Module dependencies
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import { Form, FormSHL } from '../../../../../components/shared/base/Form';
import JSXwrapper from '../../../../../components/shared/helpers/JSXwrapper';

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

// Configure Redux Form
export default reduxForm({
  form: 'survey',
  destroyOnUnmount: false
})(SurveyForm);
