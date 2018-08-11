// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Constants
import CSS from 'constants/string/css';

// Companion files
import './styles.scss';

// Static type
type Props = {
  children: React.Node,
  end: boolean,
  margin: string,
  options: string
};

type Return = React.Element<'div'>;

// Default props
const defaultProps = {
  end: false,
  margin: CSS.margin.MB04,
  options: ''
};

// Component
const TipContainer = ({
  children, end, margin, options
}: Props): Return => (
  <div className={cx(CSS.margin.MT04, !end && margin, !!options && options)} styleName="container">
    {children}
  </div>
);

// Specify default values for props
TipContainer.defaultProps = defaultProps;

// Module exports
export default TipContainer;
