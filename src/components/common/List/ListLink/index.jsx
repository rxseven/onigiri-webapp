// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Components and HOCs
import ExLink from 'components/common/ExLink';

// Companion files
import './styles.scss';

// Static types
type Props = {
  children: string,
  icon: boolean,
  tag: string,
  to: string,
  v: string
};

type Return = React.Element<'span'>;

// Default props
const defaultProps = {
  icon: false,
  tag: '',
  v: ''
};

// Component
const ListLink = ({
  children, icon, tag, to, v
}: Props): Return => (
  <span styleName={cx(((!!tag && tag) || (!!v && v)) && 'version')}>
    <ExLink icon={icon} to={to}>
      {children}
    </ExLink>
    <If condition={!!tag}>
      <code>{tag}</code>
    </If>
    <If condition={!!v}>
      <code>v{v}</code>
    </If>
  </span>
);

// Specify default values for props
ListLink.defaultProps = defaultProps;

// Module exports
export default ListLink;
