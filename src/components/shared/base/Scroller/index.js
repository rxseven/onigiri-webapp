// Module dependencies
import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

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
