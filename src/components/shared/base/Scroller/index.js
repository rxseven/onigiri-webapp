// Module dependencies
import React, { Component } from 'react';

// Scroller container
export class Scroller extends Component {
  render() {
    return <div>Scroller component</div>;
  }
}

// Scroller content
export const ScrollerContent = props => props.children;

// Scroller empty content
export const ScrollerEmpty = props => props.children;
