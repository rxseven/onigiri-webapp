// @flow
// Module dependencies
import * as React from 'react';

import Button from '../Button';
import ButtonList from '../ButtonList';

// Static types
type Props = {
  active: boolean,
  children: React.Node,
  handler: {
    onClick: mixed => void
  },
  type: string,
  value: string
};

type Return = React.Node;

// Component
class ButtonHandler extends React.Component<Props> {
  // Default props
  static defaultProps = {
    type: ''
  };

  // Click handler
  handleClick = (): void => {
    this.props.handler.onClick(this.props.value);
  };

  // Render Button
  renderButton = (): React.Element<typeof Button> => {
    // Variables
    // eslint-disable-next-line
    const { handler, value, ...props } = this.props;

    // View
    return (
      <Button {...props} handler={this.handleClick}>
        {this.props.children}
      </Button>
    );
  };

  // Render Button list group
  renderButtonList = (): React.Element<typeof ButtonList> => {
    // Variables
    // eslint-disable-next-line
    const { handler, type, value, ...props } = this.props;

    // View
    return (
      <ButtonList {...props} handler={this.handleClick}>
        {this.props.children}
      </ButtonList>
    );
  };

  // Render component
  render(): Return {
    return (
      <Choose>
        <When condition={this.props.type === 'button-list'}>{this.renderButtonList()}</When>
        <Otherwise>{this.renderButton()}</Otherwise>
      </Choose>
    );
  }
}

// Module exports
export default ButtonHandler;
