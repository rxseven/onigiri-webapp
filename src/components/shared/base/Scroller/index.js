// Module dependencies
import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

// Declare prop types and default props
import propTypes from './constants/propTypes';
import defaultProps from './constants/defaultProps';

// Constants
const INITIAL_STATE = {
  current: 0,
  more: true,
  next: 1,
  query: null,
  total: 0
};

// Scroller container
export class Scroller extends Component {
  // Constructor
  constructor(props) {
    super(props);

    // Configuration
    const pagination = props.state.pagination ? props.state.pagination : null;

    // Component properties
    this.isMouthing = true;

    // Initial state
    this.state = { ...INITIAL_STATE, ...pagination };
  }

  // After a component is mounted...
  componentDidMount() {
    // Update mouthing state
    this.isMouthing = true;
  }

  // Before a component is unmounted and destroyed...
  componentWillUnmount() {
    // Update mouthing state
    this.isMouthing = false;
  }

  // Render a component
  render() {
    return (
      <InfiniteScroll
        hasMore={this.state.more}
        loader={<div key={0}>Loading...</div>}
        loadMore={undefined}
        pageStart={1}
        threshold={100}
      >
        {this.props.children}
      </InfiniteScroll>
    );
  }
}

// Scroller content
export const ScrollerContent = props => props.children;

// Scroller empty content
export const ScrollerEmpty = props => props.children;

// Specify prop types and default values for props
Scroller.propTypes = propTypes.core;
ScrollerContent.propTypes = propTypes.content;
ScrollerEmpty.propTypes = propTypes.empty;

Scroller.defaultProps = defaultProps.core;
