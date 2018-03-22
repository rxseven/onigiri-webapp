// Module dependencies
import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import Loading from '../../base/Loading';

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

  // Load a list of surveys
  onLoad = async () => {
    // Constants
    const { more, current, next } = this.state;

    // If a list of surveys is available to be fetched, continue fetching data
    if (more && this.props.state.mode) {
      // If the API has not returned a response yet, skip the next request
      if (next !== current) {
        // Update the current page
        this.setState(prevState => ({ current: prevState.current + 1 }));

        // Create query string
        const query = { page: next, ...this.state.query };

        // Make a network request
        this.props.actions.getData(query, () => {
          if (this.isMouthing) {
            // Create the next query if next pages are available
            if (this.props.state.meta.paging.next) {
              this.setState(() => ({ next: this.props.state.meta.paging.next }));
            } else {
              this.setState(() => ({ more: false }));
            }

            // Update total fetched items
            this.setState(prevState => ({ total: prevState.total + 1 }));
          }
        });
      }
    }
  };

  // Render a component
  render() {
    return (
      <InfiniteScroll
        hasMore={this.state.more}
        loader={<Loading key={0} />}
        loadMore={this.onLoad}
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
