// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Components and HOCs
import Text from 'components/common/Text';

// Static types
type Props = {
  helper: string,
  input: Object,
  label: string,
  meta: {
    error: ?string,
    touched: boolean,
    warning: ?string
  },
  type: string
};

type Return = React.Element<'div'>;

// Default props
const defaultProps = {
  helper: ''
};

// Component
const FormField = ({
  helper,
  input,
  label,
  meta: { error, touched, warning },
  type
}: Props): Return => {
  // Configuration
  const isInvalid = (error && warning) || (error && !warning);
  const isWarning = !error && warning;
  const hasInvalid = touched && isInvalid;
  const hasWarning = touched && isWarning;
  const inputStyles = cx('form-control', hasInvalid && 'is-invalid', hasWarning && 'is-warning');

  // View
  return (
    <div className="form-group">
      <If condition={type === 'text' || type === 'password'}>
        <input className={inputStyles} id={input.name} placeholder={label} type={type} {...input} />
      </If>

      <If condition={type === 'textarea'}>
        <textarea className={inputStyles} id={input.name} placeholder={label} rows={3} {...input} />
      </If>

      <If condition={!!helper}>
        <Text mute options="form-text" small>
          {helper}
        </Text>
      </If>

      <div className={cx(hasInvalid && 'invalid-feedback', hasWarning && 'warning-feedback')}>
        {touched && ((isInvalid && <span>{error}</span>) || (isWarning && <span>{warning}</span>))}
      </div>
    </div>
  );
};

// Specify default values for props
FormField.defaultProps = defaultProps;

// Module exports
export default FormField;
