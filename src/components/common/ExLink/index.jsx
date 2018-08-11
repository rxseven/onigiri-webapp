// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Components and HOCs
import Icon from 'components/common/Icon';

// Companion files
import './styles.scss';

// Static types
type Props = {
  button: string,
  children: React.Node,
  flat: boolean,
  icon: boolean,
  options: string,
  rel: string,
  replace: boolean,
  to: string
};

type Return = React.Element<'a'>;

// Default props
const defaultProps = {
  button: '',
  flat: false,
  icon: false,
  options: '',
  rel: 'noopener noreferrer',
  replace: false
};

// Component
const ExLink = ({
  button, children, flat, icon, options, rel, replace, to
}: Props): Return => (
  <a
    className={cx(!!button && `btn btn-${button}`, !!options && options)}
    href={to}
    rel={rel}
    styleName={cx(flat && 'flat')}
    target={replace ? '_self' : '_blank'}
  >
    {children}
    <If condition={!!icon}>
      <span styleName="icon">
        <Icon name="external-link" title="External link" />
      </span>
    </If>
  </a>
);

// Specify default values for props
ExLink.defaultProps = defaultProps;

// Module exports
export default ExLink;
