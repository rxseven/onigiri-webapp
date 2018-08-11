// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Companion files
import './styles.scss';

// Static types
type Props = {
  disabled: boolean,
  name: string,
  options: string,
  text: boolean,
  title: string
};

type Return = React.Element<'span'>;

// Default props
const defaultProps = {
  disabled: false,
  options: '',
  text: false
};

// Component
const Icon = ({
  disabled, name, options, text, title
}: Props): Return => {
  // Configuration
  const baseClass = 'oi';

  // View
  return (
    <span
      aria-hidden="true"
      className={cx(
        baseClass,
        `${baseClass}-${name}`,
        'icon',
        !!options && options,
        text && 'icon-inline'
      )}
      styleName={cx(disabled && 'disabled', text && 'inline')}
      title={title}
    />
  );
};

// Specify default values for props
Icon.defaultProps = defaultProps;

// Module exports
export default Icon;
