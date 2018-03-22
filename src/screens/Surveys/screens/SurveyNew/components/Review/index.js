// Module dependencies
import { map } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { Button, ButtonSet } from '../../../../../../components/shared/base/Buttons';
import { FormSHL } from '../../../../../../components/shared/base/Form';
import Render from '../../../../../../components/shared/helpers/Render';

// Peer dependencies
import * as surveyActions from '../../../SurveyNew/actions';
import FIELDS from '../../constants/fields';
import styles from './styles.scss';

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
    const { onCancel } = this.props;

    // View
    return (
      <div className="form-review">
        <FormSHL>Please review your entries</FormSHL>
        {this.renderField()}
        {this.renderInfo()}
        <ButtonSet>
          <Button handler={onCancel}>Edit</Button>
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
    }
  }
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    survey: bindActionCreators(surveyActions, dispatch)
  }
});

// Connect component to application state
const container = withRouter(connect(mapStateToProps, mapDispatchToProps)(SurveyReview));

// Module exports
export default container;
