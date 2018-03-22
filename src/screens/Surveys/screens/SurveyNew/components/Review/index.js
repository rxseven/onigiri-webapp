// Module dependencies
import { map } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { Button, ButtonSet } from '../../../../../../components/shared/base/Buttons';
import { FormSHL } from '../../../../../../components/shared/base/Form';
import Spinner from '../../../../../../components/shared/base/Spinner';
import Render from '../../../../../../components/shared/helpers/Render';

// Constants
import PROP_TYPES from '../../../../../../constants/models/propTypes';
import STATE_MODELS from '../../../../../../constants/models/state';

// Peer dependencies
import * as surveyActions from '../../../SurveyNew/actions';
import { getUI } from '../../reducer';
import FIELDS from '../../constants/fields';
import styles from './styles.scss';

// Declare prop types and default props
const propTypes = PROP_TYPES.wrapper.asynchronous({
  post: PROP_TYPES.model.asynchronous
});

const defaultProps = STATE_MODELS.wrapper.asynchronous({
  post: { ...STATE_MODELS.model.asynchronous }
});

// Component
class SurveyReview extends Component {
  // Submit handler
  onSubmit = () => {
    // Variables
    const { actions, state: { data: { form } } } = this.props;

    // Create new survey and send out emails
    actions.survey.createSurvey(form, (id) => {
      // TODO: Redirect to Success screen after the form has been submitted
      console.log('this.onSubmit() is executed.');
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
            <label className={styles.label}>{label}</label>
            <div>{value}</div>
          </div>
        );
      }

      // Otherwise
      return null;
    });

  // Render info
  renderInfo = () => {
    // Variables
    const { from, landing } = this.props.state.data.form;

    // View
    return (
      <Render condition={!from || !landing}>
        <div className={styles.info}>
          You did&apos;t provide {!from && 'sender email'}
          {!from && !landing && ' and '}
          {!landing && 'landing page'}, the system defaults will be applied.
        </div>
      </Render>
    );
  };

  // Render a component
  render() {
    // Variables
    const { onCancel, state: { ui: { asynchronous } } } = this.props;
    const { loading } = asynchronous.post;

    // View
    return (
      <div className="form-review">
        <FormSHL>Please review your entries</FormSHL>
        {this.renderField()}
        {this.renderInfo()}
        <ButtonSet>
          <Button handler={onCancel}>Edit</Button>
          <Button button="primary" handler={this.onSubmit}>
            Send survey
          </Button>
          <Render condition={loading}>
            <Spinner />
          </Render>
        </ButtonSet>
      </div>
    );
  }
}

// Map state to props
const mapStateToProps = state => ({
  state: {
    data: {
      form: state.form.survey.values
    },
    ui: getUI(state)
  }
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    survey: bindActionCreators(surveyActions, dispatch)
  }
});

// Specify prop types and default values for props
SurveyReview.propTypes = propTypes;
SurveyReview.defaultProps = defaultProps;

// Connect component to application state
const container = withRouter(connect(mapStateToProps, mapDispatchToProps)(SurveyReview));

// Module exports
export default container;
