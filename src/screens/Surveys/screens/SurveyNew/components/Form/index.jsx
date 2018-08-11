// @flow
// Module dependencies
import { each } from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form/immutable';

// Helper functions
import { generateState } from 'helpers/state';
import validationHelper from 'helpers/validation';

// Components and HOCs
import { Button } from 'components/common/Buttons';
import { Card, CardBody, CardHeader, CardText } from 'components/common/Card';
import { Form, FormSHL } from 'components/common/Forms';
import Spinner from 'components/common/Spinner';
import Confirm from 'components/composite/Confirm';
import toJS from 'HOCs/state/toJS';

// Constants
import STATE_MODELS from 'constants/models/state';
import PATHS from 'constants/router/paths';

// Types
import type { Balance } from 'data/credits/types';
import type { Modal } from 'data/interfaces/modal/types';
import type { History, Location } from 'types/common/router';

// Action creators and selectors
import { getCredits } from 'data/credits/actions';
import { getBalance } from 'data/credits/reducers';
import * as modalActions from 'data/interfaces/modal/actions';
import { getModal } from 'data/interfaces/modal/reducers';

// Companion files
import FIELDS from '../../constants/fields';

// Static types
type Props = {
  actions: {
    credits: {
      getCredits: Function
    },
    modal: {
      closeModal: Function,
      openModal: Function
    }
  },
  history: History,
  location: Location,
  onReview: Function,
  pristine: boolean,
  state: {
    data: {
      balance: Balance,
      interfaces: {
        modal: Modal
      }
    }
  }
};

type Return = React.Node;

// Component
class SurveyForm extends React.Component<Props> {
  // After a component is mounted...
  componentDidMount() {
    // Get credits
    this.getCredits();
  }

  // Request for cancelling form
  onCancelFormRequest = (): void => {
    // Verify form values
    if (this.props.pristine) {
      // If the form is clean, navigate away
      this.onLeave();
    } else {
      // If the form has values, show a confirmation modal
      this.props.actions.modal.openModal();
    }
  };

  // Confirm cancelling form
  onCancelFormConfirm = (): void => {
    // Close a modal
    this.props.actions.modal.closeModal();

    // Navigate away
    this.onLeave();
  };

  // Navigate to survey list view screen
  onLeave = (): void => {
    this.props.history.push(PATHS.surveys.list);
  };

  // Get credits
  getCredits = (): void => {
    if (this.props.state.data.balance == null) {
      this.props.actions.credits.getCredits();
    }
  };

  // Render content
  renderContent = (props): React.Element<'div'> => (
    <div>
      <FormSHL>Please enter your entries</FormSHL>
      <Form
        {...props}
        alert={false}
        cancelButton={<Button handler={this.onCancelFormRequest}>Cancel</Button>}
        fields={FIELDS}
        spinner={false}
        submitButton="Next"
        submitCallback={false}
        submitFunction={props.onReview}
      />
      <Confirm
        alert={false}
        buttonCancel="Cancel"
        buttonConfirm="Discard"
        onClose={props.actions.modal.closeModal}
        onConfirm={this.onCancelFormConfirm}
        spinner={false}
        title="Cancel Creating Survey"
        visibility={props.state.data.interfaces.modal.isOpen}
      >
        <h5>All your progress will be lost</h5>
        <p>Are you sure you don’t want to reconsider?</p>
      </Confirm>
    </div>
  );

  // Render loading state
  renderLoading = (): React.Element<typeof Spinner> => <Spinner loading />;

  // Render warning message
  renderWarning = (location): React.Element<typeof Card> => (
    <Card alignment="text-center" end>
      <CardHeader>Not enough credits</CardHeader>
      <CardBody>
        <CardText>Sorry, your credits are gone.</CardText>
        <Button
          button="primary"
          link={{ pathname: PATHS.users.profile, state: { from: location } }}
          type="link"
        >
          Add credits
        </Button>
      </CardBody>
    </Card>
  );

  // Render component
  render(): Return {
    // Variables
    const { balance } = this.props.state.data;

    // View
    return (
      <React.Fragment>
        {balance == null && this.renderLoading()}
        {balance != null && balance < 1 && this.renderWarning(this.props.location)}
        {balance != null && balance >= 1 && this.renderContent(this.props)}
      </React.Fragment>
    );
  }
}

// Error validation rules
const validate = (values: any): {} => {
  // Initial errors object
  const errors = {};

  // Validate survey title
  if (values.get('title')) {
    errors.title = validationHelper.name(values.get('title'));
  }

  // Validate sender name
  if (values.get('sender')) {
    errors.sender = validationHelper.name(values.get('sender'));
  }

  // Validate sender email
  errors.from = validationHelper.email(values.get('from'));

  // Validate subject line
  if (values.get('subject')) {
    errors.subject = validationHelper.name(values.get('subject'));
  }

  // Validate body
  if (values.get('body')) {
    errors.body = validationHelper.name(values.get('body'));
  }

  // Validate recipient emails
  errors.recipients = validationHelper.emails(values.get('recipients'));

  // Validate landing page
  errors.landing = validationHelper.url(values.get('landing'));

  // Iterates over elements of collection and validate value for each element
  each(FIELDS, ({ name, required }) => {
    if (required && !values.get(name)) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
};

// Warning validation rules
const warn = (values: any): {} => {
  // Initial warnings object
  const warnings = {};

  // From field
  if (!values.get('from')) {
    warnings.from = 'Leaving it blank the default email will be applied';
  }

  // Landing page field
  if (!values.get('landing')) {
    warnings.landing = 'Leaving it blank the default URL will be applied';
  }

  return warnings;
};

// Map state to props
const mapStateToProps = (state: any): any =>
  generateState(STATE_MODELS.immutable
    .setIn(['data', 'balance'], getBalance(state))
    .setIn(['data', 'interfaces', 'modal'], getModal(state)));

// Map dispatch to props
const mapDispatchToProps = (dispatch: any): any => ({
  actions: {
    credits: bindActionCreators({ getCredits }, dispatch),
    modal: bindActionCreators(modalActions, dispatch)
  }
});

// Connect component to application state
const container = withRouter(connect(mapStateToProps, mapDispatchToProps)(toJS(SurveyForm)));

// Configure Redux Form
export default reduxForm({
  form: 'survey',
  destroyOnUnmount: false,
  validate,
  warn
})(container);
