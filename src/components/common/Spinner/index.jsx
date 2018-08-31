// @flow
// Module dependencies
import { FadingCircle, ThreeBounce } from 'better-react-spinkit';
import * as React from 'react';

// Companion files
import './styles.scss';

// Static types
type Props = { loading: boolean };
type Return = React.Node;

// Default props
const defaultProps = {
  loading: false
};

// Options
const options = {
  bounce: {
    color: '#999',
    duration: '1.25s',
    gutter: 6,
    size: 6
  }
};

// Component
const Spinner = ({ loading }: Props): Return => (
  <Choose>
    <When condition={loading}>
      <div styleName="bounce">
        <ThreeBounce {...options.bounce} />
      </div>
    </When>
    <Otherwise>
      <div styleName="circle">
        <FadingCircle />
      </div>
    </Otherwise>
  </Choose>
);

// Specify default values for props
Spinner.defaultProps = defaultProps;

// Module exports
export default Spinner;
