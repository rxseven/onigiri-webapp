// @flow
// Module dependencies
import * as React from 'react';

// Helper functions
import uiHelper from 'helpers/interface';

// Constants
import HTML from 'constants/elements/html';

// Component types
import Body from '../Body';
import Header from '../Header';
import Lightbox from '../Lightbox';
import Notification from '../Notification';

// Static types
type Props = {
  children:
    | React.Element<typeof Body>
    | React.Element<typeof Header>
    | React.Element<typeof Lightbox>
    | React.Element<typeof Notification>
};

type Return = React.Element<'div'>;

type State = {
  visibility: string
};

// Component
class Wrapper extends React.Component<Props, State> {
  // Initial state
  state = { visibility: 'invisible' };

  // After a component is mounted...
  componentDidMount() {
    // Set visibility after FOUC has gone
    uiHelper.FOUC(this.onVisible);
  }

  // Set visibility
  onVisible = (): void => {
    this.setState(() => ({ visibility: 'visible' }));
  };

  // Render component
  render(): Return {
    return (
      <div className={this.state.visibility} id={HTML.wrapper}>
        {this.props.children}
      </div>
    );
  }
}

// Module exports
export default Wrapper;
