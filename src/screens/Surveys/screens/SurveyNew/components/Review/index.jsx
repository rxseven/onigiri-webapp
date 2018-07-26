// Module dependencies
import { map } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

// Helper functions
import emailHelper from 'helpers/email';
import { generateState } from 'helpers/state';

// Components and HOCs
import { Button, ButtonSet } from 'components/common/Buttons';
import { FormSHL } from 'components/common/Forms';
import Spinner from 'components/common/Spinner';
import Error from 'components/composite/Error';
import toJS from 'HOCs/state/toJS';

// Constants
import PROP_TYPES from 'constants/models/propTypes';
import STATE_MODELS from 'constants/models/state';
import PATHS from 'constants/router/paths';

// Action creators and selectors
import * as surveyActions from '../../actions';
import { getUI } from '../../reducers';

// Companion files
import FIELDS from '../../constants/fields';
import './styles.scss';

// Declare prop types and default props
const propTypes = PROP_TYPES.wrapper.asynchronous({
  post: PROP_TYPES.model.asynchronous
});

const defaultProps = STATE_MODELS.wrapper.asynchronous({
  post: { ...STATE_MODELS.model.asynchronous }
});

// Component
class SurveyReview extends Component {
  // Before a component is unmounted and destroyed...
  componentWillUnmount() {
    // Reset UI state
    this.onReset();
  }

  // Reset UI state
  onReset = () => {
    this.props.actions.surveys.resetUI();
  };

  // Submit handler
  onSubmit = () => {
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
  renderField = () =>
    // Create Field array of values
    map(FIELDS, ({ label, name }, index) => {
      // Variables
      const value = this.props.state.data.form[name];

      // Generate HTML elements if the value exists
      if (value) {
        return (
          <div className="form-group" key={index}>
            <label styleName="label">{label}</label>
            <div>{value}</div>
          </div>
        );
      }

      // Otherwise
      return null;
    });

  // Render info
  renderInfo = () => (
    <If condition={!this.props.state.data.form.from}>
      <div styleName="info">
        You did’t provide sender email, the system defaults will be applied.
      </div>
    </If>
  );

  // Render a component
  render() {
    // Variables
    const { onCancel, state: { ui: { asynchronous } } } = this.props;
    const { error, loading } = asynchronous.post;

    // View
    return (
      <div className="form-review">
        <FormSHL>Please review your entries</FormSHL>
        {this.renderField()}
        {this.renderInfo()}
        <If condition={error}>
          <Error alert={error} />
        </If>
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

// Map state to props
const mapStateToProps = state =>
  generateState(STATE_MODELS.immutable
    .setIn(['data', 'form'], state.getIn(['form', 'survey', 'values']))
    .setIn(['ui'], getUI(state)));

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    surveys: bindActionCreators(surveyActions, dispatch)
  }
});

// Specify prop types and default values for props
SurveyReview.propTypes = propTypes;
SurveyReview.defaultProps = defaultProps;

// Connect component to application state
const container = withRouter(connect(mapStateToProps, mapDispatchToProps)(toJS(SurveyReview)));

// Module exports
export default container;
