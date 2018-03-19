// Module dependencies
import cx from 'classnames';
import React from 'react';

import Text from '../../base/Text';
import Render from '../../helpers/Render';

// Form field
export const FormField = ({
  helper,
  input,
  label,
  meta: { error, touched, warning },
  type
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
      <Render condition={type === 'text' || type === 'password'}>
        <input className={inputStyles} id={input.name} placeholder={label} type={type} {...input} />
      </Render>

      <Render condition={type === 'textarea'}>
        <textarea className={inputStyles} id={input.name} placeholder={label} rows={3} {...input} />
      </Render>

      {helper && <Text mute options="form-text" small>{helper}</Text>}

      <div
        className={`${touched &&
          ((isInvalid && 'invalid-feedback') || (isWarning && 'warning-feedback'))}`}
      >
        {touched && ((isInvalid && <span>{error}</span>) || (isWarning && <span>{warning}</span>))}
      </div>
    </div>
  );
};
