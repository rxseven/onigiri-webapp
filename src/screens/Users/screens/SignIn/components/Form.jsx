// Module dependencies
import { each } from 'lodash';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form/immutable';

// Helper functions
import { generateState } from 'helpers/state';
import validationHelper from 'helpers/validation';

// Components and HOCs
import { Button } from 'components/common/Buttons';
import { Form } from 'components/common/Form';
import toJS from 'HOCs/state/toJS';

// Constants
import STATE_MODELS from 'constants/models/state';
import PATHS from 'constants/router/paths';

// Action creators and selectors
import { signIn } from 'data/session/actions';
import { resetUI } from '../actions';
import { getUI } from '../reducers';

// Companion files
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
    // Redirect to Surveys screen after the form has been submitted
    this.props.history.push({ pathname: PATHS.surveys.list });
  };

  // Render component
  render() {
    return (
      <Form
        {...this.props}
        alert={false}
        asynchronous={this.props.state.ui.asynchronous.post}
        cancelButton={<Button handler={this.props.onCancel}>Cancel</Button>}
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
  errors.email = validationHelper.email(values.get('email'));

  // Iterates over elements of collection and validate value for each element
  each(FIELDS, ({ name }) => {
    if (!values.get(name)) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
};

// Map state to props
const mapStateToProps = state => generateState(STATE_MODELS.immutable.setIn(['ui'], getUI(state)));

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators({ resetUI, signIn }, dispatch)
  }
});

// Connect component to application state
const container = withRouter(connect(mapStateToProps, mapDispatchToProps)(toJS(SignInForm)));

// Configure Redux Form
export default reduxForm({ form: 'signin', validate })(container);
