// Module dependencies
import { map } from 'lodash';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Field } from 'redux-form/immutable';

import { Button, ButtonSet } from 'components/common/Buttons';
import Spinner from 'components/common/Spinner';
import Text from 'components/common/Text';
import Error from 'components/composite/Error';

// Constants
import PROP_TYPES from 'constants/models/propTypes';
import STATE_MODELS from 'constants/models/state';

// Peer dependencies
import styles from './styles.scss';

// Declare prop types and default props
const propTypes = {
  form: {
    alert: PropTypes.bool,
    asynchronous: PROP_TYPES.model.asynchronous,
    options: PropTypes.string,
    spinner: PropTypes.bool
  },
  group: {
    children: PropTypes.node.isRequired,
    end: PropTypes.bool
  },
  headline: {
    children: PropTypes.string.isRequired
  },
  meta: {
    children: PropTypes.node.isRequired
  },
  stack: {
    children: PropTypes.node.isRequired,
    end: PropTypes.bool
  },
  subheadline: {
    children: PropTypes.string.isRequired
  }
};

const defaultProps = {
  form: {
    alert: true,
    asynchronous: { ...STATE_MODELS.model.asynchronous },
    options: null,
    spinner: true
  },
  group: {
    end: false
  },
  stack: {
    end: false
  }
};

// Form field
export const FormField = ({
  helper, input, label, meta: { error, touched, warning }, type
}) => {
  // Configuration
  const isInvalid = (error && warning) || (error && !warning);
  const isWarning = !error && warning;
  const inputStyles = cx(
    'form-control',
    `${touched && ((isInvalid && 'is-invalid') || (isWarning && 'is-warning'))}`
  );

  // View
  return (
    <div className="form-group">
      <If condition={type === 'text' || type === 'password'}>
        <input className={inputStyles} id={input.name} placeholder={label} type={type} {...input} />
      </If>

      <If condition={type === 'textarea'}>
        <textarea className={inputStyles} id={input.name} placeholder={label} rows={3} {...input} />
      </If>

      {helper && (
        <Text mute options="form-text" small>
          {helper}
        </Text>
      )}

      <div
        className={`${touched &&
          ((isInvalid && 'invalid-feedback') || (isWarning && 'warning-feedback'))}`}
      >
        {touched && ((isInvalid && <span>{error}</span>) || (isWarning && <span>{warning}</span>))}
      </div>
    </div>
  );
};

// Form
export class Form extends Component {
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

// Form group
export const FormGroup = ({ children, end }) => (
  <div className={cx('form-group', end && styles.end)}>{children}</div>
);

// Form headline
export const FormHL = ({ children }) => <h2 className={styles.headline}>{children}</h2>;

// Form meta
export const FormMeta = ({ children }) => (
  <div className={styles.meta}>
    <span className={styles.context}>{children}</span>
  </div>
);

// Form stack
export const FormStack = ({ children, end }) => <div className={!end && 'mb-3'}>{children}</div>;

// Form Subheadline
export const FormSHL = ({ children }) => <h3 className={styles.subheadline}>{children}</h3>;

// Specify prop types and default values for props
Form.propTypes = propTypes.form;
FormGroup.propTypes = propTypes.group;
FormHL.propTypes = propTypes.headline;
FormMeta.propTypes = propTypes.meta;
FormStack.propTypes = propTypes.stack;
FormSHL.propTypes = propTypes.subheadline;

Form.defaultProps = defaultProps.form;
FormGroup.defaultProps = defaultProps.group;
FormStack.defaultProps = defaultProps.stack;
