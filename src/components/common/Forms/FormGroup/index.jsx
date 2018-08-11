// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Companion files
import './styles.scss';

// Static types
type Props = {
  children: React.Node,
  end: boolean
};

type Return = React.Element<'div'>;

// Default props
const defaultProps = {
  end: false
};

// Component
const FormGroup = ({ children, end }: Props): Return => (
  <div className="form-group" styleName={cx(end && 'end')}>
    {children}
  </div>
);

// Specify default values for props
FormGroup.defaultProps = defaultProps;

// Module exports
export default FormGroup;
