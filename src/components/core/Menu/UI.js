// Module dependencies
import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { decorator as reduxMenu } from 'redux-burger-menu';

// Constants
import HTML from '../../../constants/elements/html';

// Extended Menu component
const ExMenu = reduxMenu(Menu);

// Component
class UI extends Component {
  render() {
    // Options
    const menuOptions = {
      customBurgerIcon: false,
      customCrossIcon: false,
      outerContainerId: HTML.wrapper,
      pageWrapId: HTML.body,
      width: '85%'
    };

    // View
    return (
      <ExMenu {...menuOptions}>
        <div>Menu component</div>
      </ExMenu>
    );
  }
}

// Module exports
export default UI;
