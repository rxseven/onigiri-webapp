// Module dependencies
import React, { PureComponent } from 'react';

// Helper functions
import asyncHelper from 'helpers/asynchronous';

// Components and HOCs
import Overlay from 'components/common/Overlay';
import Spinner from 'components/common/Spinner';

// Companion files
import './styles.scss';

// Component
class UI extends PureComponent {
  // Infitial state
  state = { longLoad: false };

  // After a component is mounted...
  componentDidMount() {
    // Check if the operation timed out or a network request is taking too long
    this.timeoutMessage();
  }

  /**
   * Sometimes the app has been sleeping or network connections suck and never
   * resolve or fail, they just hang there forever. This is a bad UX because
   * the user won't know if it should always take this long, or if they should
   * try refreshing. The app should show a friendly message to the user.
   */
  timeoutMessage = () => {
    asyncHelper.timeout(null, 5000).then((response) => {
      this.setState(() => ({ longLoad: true }));
    });
  };

  // Render component
  render() {
    // Variables
    const { state: { data } } = this.props;

    // View
    return (
      <If condition={data.session.loading.verify}>
        <Overlay>
          <div styleName="logo" />
          <div styleName="spinner">
            <Spinner loading />
          </div>
          <If condition={this.state.longLoad}>
            <div styleName="description">
              <p>Hang tight, the app has been sleeping...</p>
            </div>
          </If>
        </Overlay>
      </If>
    );
  }
}

// Module exports
export default UI;
