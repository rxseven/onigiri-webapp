// Module dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

// Helper functions
import uiHelper from 'helpers/interface';

// Constants
import HTML from 'constants/elements/html';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired
});

// Component
class Wrapper extends Component {
  // Initial state
  state = { visibility: 'invisible' };

  // After a component is mounted...
  componentDidMount() {
    // Set visibility after FOUC has gone
    uiHelper.FOUC(this.onVisible);
  }

  // Set visibility
  onVisible = () => {
    this.setState(() => ({ visibility: 'visible' }));
  };

  // Render component
  render() {
    return (
      <div className={this.state.visibility} id={HTML.wrapper}>
        {this.props.children}
      </div>
    );
  }
}

// Specify prop types
Wrapper.propTypes = propTypes;

// Module exports
export default Wrapper;