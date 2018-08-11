// @flow
// Module dependencies
import { isEmpty, map } from 'lodash';
import * as React from 'react';

// Helper functions
import emailHelper from 'helpers/email';

// Components and HOCs
import { Button, ButtonSet } from 'components/common/Buttons';
import { FormSHL } from 'components/common/Forms';
import Spinner from 'components/common/Spinner';
import Error from 'components/composite/Error';

// Constants
import STATE_MODELS from 'constants/models/state';
import PATHS from 'constants/router/paths';

// Types
import type { History } from 'types/common/router';
import type { Asynchronous } from 'types/common/state';
import type { Form } from '../../types';

// Companion files
import FIELDS from '../../constants/fields';
import './styles.scss';

// Static types
type Props = {
  actions: {
    surveys: {
      createSurvey: Function,
      resetUI: Function
    }
  },
  history: History,
  onCancel: Function,
  state: {
    data: {
      form: Form
    },
    ui: {
      asynchronous: {
        post: Asynchronous
      }
    }
  }
};

type Return = React.Element<'div'>;

// Component
class UI extends React.Component<Props> {
  // Default props
  static defaultProps = STATE_MODELS.wrapper.asynchronous({
    post: { ...STATE_MODELS.model.asynchronous }
  });

  // Before a component is unmounted and destroyed...
  componentWillUnmount() {
    // Reset UI state
    this.onReset();
  }

  // Reset UI state
  onReset = (): void => {
    this.props.actions.surveys.resetUI();
  };

  // Submit handler
  onSubmit = (): void => {
    // Variables
    const { actions, history, state: { data: { form } } } = this.props;
    const { recipients, title } = form;

    // Create new survey and send out emails
    actions.surveys.createSurvey(form, (id) => {
      // Redirect to Success screen after the form has been submitted
      history.push({
        pathname: PATHS.surveys.success,
        state: {
          id,
          referrer: true,
          recipients: emailHelper.length(recipients),
          title
        }
      });
    });
  };

  // Render fields
  renderField = (form: Form): React.Node | void =>
    // Create Field array of values
    map(FIELDS, ({ label, name }, index) => {
      // Variables
      const value = form[name];

      // Generate HTML elements if the value exists
      return (
        <If condition={!!value}>
          <div className="form-group" key={index}>
            <label styleName="label">{label}</label>
            <div>{value}</div>
          </div>
        </If>
      );
    });

  // Render info
  renderInfo = (form: Form): React.Node | void => (
    <If condition={isEmpty(form.from)}>
      <div styleName="info">
        You did’t provide sender email, the system defaults will be applied.
      </div>
    </If>
  );

  // Render a component
  render(): Return {
    // Variables
    const { onCancel, state: { data: { form }, ui: { asynchronous } } } = this.props;
    const { error, loading } = asynchronous.post;

    // View
    return (
      <div className="form-review">
        <FormSHL>Please review your entries</FormSHL>
        {this.renderField(form)}
        {this.renderInfo(form)}
        {!!error && <Error alert={error} />}
        <ButtonSet>
          <Button disabled={loading} handler={onCancel}>
            Edit
          </Button>
          <Button button="primary" disabled={loading} handler={this.onSubmit}>
            Send survey
          </Button>
          <If condition={loading}>
            <Spinner />
          </If>
        </ButtonSet>
      </div>
    );
  }
}

// Module exports
export default UI;
