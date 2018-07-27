// Module dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Button from '../Button';
import ButtonList from '../ButtonList';

// Declare prop types
const propTypes = {
  children: PropTypes.node,
  type: PropTypes.string
};

const defaultProps = {
  children: null,
  type: null
};

// Component
class ButtonHandler extends Component {
  // Click handler
  handleClick = () => {
    this.props.handler.onClick(this.props.value);
  };

  // Render Button
  renderButton = () => {
    // Variables
    // eslint-disable-next-line
    const { value, ...props } = this.props;

    // View
    return (
      <Button {...props} handler={this.handleClick}>
        {this.props.children}
      </Button>
    );
  };

  // Render Button list group
  renderButtonList = () => {
    // Variables
    // eslint-disable-next-line
    const { type, value, ...props } = this.props;

    // View
    return (
      <ButtonList {...props} handler={this.handleClick}>
        {this.props.children}
      </ButtonList>
    );
  };

  // Render a component
  render() {
    if (this.props.type === 'button-list') {
      return this.renderButtonList();
    }

    return this.renderButton();
  }
}

// Specify prop types and default values for props
ButtonHandler.propTypes = propTypes;
ButtonHandler.defaultProps = defaultProps;

// Module exports
export default ButtonHandler;
