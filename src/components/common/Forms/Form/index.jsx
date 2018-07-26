// Module dependencies
import cx from 'classnames';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Field } from 'redux-form/immutable';

// Components and HOCs
import { Button, ButtonSet } from 'components/common/Buttons';
import { FormField } from 'components/common/Forms';
import Spinner from 'components/common/Spinner';
import Error from 'components/composite/Error';

// Constants
import PROP_TYPES from 'constants/models/propTypes';
import STATE_MODELS from 'constants/models/state';

// Declare prop types and default props
const propTypes = {
  alert: PropTypes.bool,
  asynchronous: PROP_TYPES.model.asynchronous,
  options: PropTypes.string,
  spinner: PropTypes.bool
};

const defaultProps = {
  alert: true,
  asynchronous: { ...STATE_MODELS.model.asynchronous },
  options: null,
  spinner: true
};

// Component
class Form extends Component {
  // Submit handler
  onSubmit = (values) => {
    this.props.submitFunction(values, this.props.submitCallback);
  };

  // Render field
  renderField = () =>
    // Create Field array of values
    map(this.props.fields, ({
      helper, label, name, type
    }, index) => (
      <Field
        component={FormField}
        helper={helper}
        key={`field-0${index}`}
        label={label}
        name={name}
        type={type}
      />
    ));

  // Render a component
  render() {
    // Variables
    const {
      alert,
      asynchronous: { error, loading },
      cancelButton,
      handleSubmit,
      options,
      pristine,
      spinner,
      submitButton
    } = this.props;

    // View
    return (
      <form className={cx(options)} onSubmit={handleSubmit(this.onSubmit)}>
        {this.renderField()}
        <If condition={alert && error}>
          <Error alert={error} />
        </If>
        <ButtonSet>
          {cancelButton}
          <Button button="primary" disabled={pristine || (spinner && loading)} type="submit">
            {submitButton}
          </Button>
          <If condition={spinner && loading}>
            <Spinner />
          </If>
        </ButtonSet>
      </form>
    );
  }
}

// Specify prop types and default values for props
Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

// Module exports
export default Form;
