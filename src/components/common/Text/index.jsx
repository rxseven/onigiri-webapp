// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Static types
type Props = {
  block: boolean,
  bold: boolean,
  children: React.Node,
  lead: boolean,
  mute: boolean,
  options: string,
  secondary: boolean,
  small: boolean
};

type Return =
  | React.Element<'p'>
  | React.Element<'small'>
  | React.Element<'strong'>
  | React.Element<'span'>;

const defaultProps = {
  block: false,
  bold: false,
  lead: false,
  mute: false,
  options: '',
  secondary: false,
  small: false
};

// Text
const Text = ({
  block, bold, children, lead, mute, options, secondary, small
}: Props): Return => {
  const css = secondary && 'text-secondary';

  if (lead) {
    return <p className="lead">{children}</p>;
  } else if (small) {
    return (
      <small className={cx(css, mute && 'text-muted', !!options && options)}>{children}</small>
    );
  } else if (bold) {
    return <strong className={cx(block && 'text-block', css)}>{children}</strong>;
  }
  return <span className={cx(block && 'text-block', css, !!options && options)}>{children}</span>;
};

// Specify default values for props
Text.defaultProps = defaultProps;

// Module exports
export default Text;
