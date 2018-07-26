// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Components and HOCs
import Text from 'components/common/Text';

// Declare prop types and default props
const propTypes = exact({
  helper: PropTypes.string,
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
});

const defaultProps = {
  helper: null
};

// Component
const FormField = ({
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

// Specify prop types and default values for props
FormField.propTypes = propTypes;
FormField.defaultProps = defaultProps;

// Module exports
export default FormField;
