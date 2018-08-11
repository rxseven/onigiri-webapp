// @flow
// Module dependencies
import { each } from 'lodash';
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form/immutable';

// Helper functions
import { generateState } from 'helpers/state';
import validationHelper from 'helpers/validation';

// Components and HOCs
import { Button } from 'components/common/Buttons';
import { Form } from 'components/common/Forms';
import toJS from 'HOCs/state/toJS';

// Constants
import STATE_MODELS from 'constants/models/state';
import PATHS from 'constants/router/paths';

// Types
import type { History } from 'types/common/router';
import type { Asynchronous } from 'types/common/state';

// Action creators and selectors
import { signIn } from 'data/session/actions';
import { resetUI } from '../../actions';
import { getUI } from '../../reducers';

// Companion files
import FIELDS from '../../constants/fields';

// Static types
type Props = {
  actions: {
    auth: {
      resetUI: Function,
      signIn: Function
    }
  },
  history: History,
  onCancel: Function,
  state: {
    ui: {
      asynchronous: {
        post: Asynchronous
      }
    }
  }
};

type Return = React.Element<typeof Form>;

// Component
class SignInForm extends React.Component<Props> {
  // Before a component is unmounted and destroyed...
  componentWillUnmount() {
    // Reset UI state
    this.onReset();
  }

  // Reset UI state
  onReset = (): void => {
    this.props.actions.auth.resetUI();
  };

  // Form submission callback
  submitCallback = (): void => {
    // Redirect to Surveys screen after the form has been submitted
    this.props.history.push({ pathname: PATHS.surveys.list });
  };

  // Render component
  render(): Return {
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
const validate = (values: any): {} => {
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
const mapStateToProps = (state: any): any =>
  generateState(STATE_MODELS.immutable.setIn(['ui'], getUI(state)));

// Map dispatch to props
const mapDispatchToProps = (dispatch: any): any => ({
  actions: {
    auth: bindActionCreators({ resetUI, signIn }, dispatch)
  }
});

// Connect component to application state
const container = withRouter(connect(mapStateToProps, mapDispatchToProps)(toJS(SignInForm)));

// Configure Redux Form
export default reduxForm({ form: 'signin', validate })(container);
