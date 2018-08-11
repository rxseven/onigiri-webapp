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
  active: boolean,
  children: React.Node,
  handler: any,
  icon: string,
  title: string
};

type Return = React.Element<'button'>;

// Default props
const defaultProps = {
  icon: '',
  title: ''
};

// Component
const ButtonList = (props: Props): Return => {
  // Configuration
  const {
    active, children, handler, icon, title
  } = props;
  const baseClass = 'list-group-item';

  // View
  return (
    <button
      className={cx(baseClass, `${baseClass}-action`, { active })}
      onClick={handler}
      styleName="button-list"
      type="button"
    >
      <If condition={!!icon}>
        <Icon name={icon} text title={title} />
      </If>
      <span styleName="text">{children}</span>
    </button>
  );
};

// Specify default values for props
ButtonList.defaultProps = defaultProps;

// Module exports
export default ButtonList;
