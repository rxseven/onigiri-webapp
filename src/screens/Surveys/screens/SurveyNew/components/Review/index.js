// Module dependencies
import { map } from 'lodash';
import React, { Component } from 'react';

import { FormSHL } from '../../../../../../components/shared/base/Form';
import Render from '../../../../../../components/shared/helpers/Render';

// Peer dependencies
import FIELDS from '../../constants/fields';
import styles from './styles.scss';

// TODO: Dummy props, please remove
const defaultProps = {
  state: {
    data: {
      form: {
        title: 'Dummy survey title',
        from: 'noreply.surveys@rxseven.com',
        subject: 'Dummy subject line',
        body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.`,
        recipients: 'recipient-001@testmail.com, recipient-002@testmail.com'
      }
    }
  }
};

// Component
class SurveyReview extends Component {
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
    return (
      <div className="form-review">
        <FormSHL>Please review your entries</FormSHL>
        {this.renderField()}
        {this.renderInfo()}
      </div>
    );
  }
}

// TODO: Dummy props, please remove
SurveyReview.defaultProps = defaultProps;

// Module exports
export default SurveyReview;
