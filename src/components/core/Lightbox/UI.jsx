// @flow
// Module dependencies
import * as React from 'react';

// Helper functions
import asyncHelper from 'helpers/asynchronous';

// Components and HOCs
import Overlay from 'components/common/Overlay';
import Spinner from 'components/common/Spinner';

// Types
import type { Session } from 'data/session/types';

// Companion files
import './styles.scss';

// Static types
type Props = {
  session: Session
};

type Return = React.Node | void;

type State = {
  longLoad: boolean
};

// Component
class UI extends React.PureComponent<Props, State> {
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
   * try refreshing. The app should render a friendly message to the user.
   */
  timeoutMessage = (): void => {
    asyncHelper.timeout(null, 5000).then((response) => {
      this.setState(() => ({ longLoad: true }));
    });
  };

  // Render component
  render(): Return {
    return (
      <If condition={this.props.session.loading.verify}>
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
