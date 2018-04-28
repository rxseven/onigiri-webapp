// Module dependencies
import { FadingCircle, ThreeBounce } from 'better-react-spinkit';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Peer dependencies
import styles from './styles.scss';

// Declare prop types and default props
const propTypes = exact({
  loading: PropTypes.bool
});

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
const Spinner = ({ loading }) => (
  <Choose>
    <When condition={loading}>
      <div className={styles.bounce}>
        <ThreeBounce {...options.bounce} />
      </div>
    </When>
    <Otherwise>
      <div className={styles.circle}>
        <FadingCircle />
      </div>
    </Otherwise>
  </Choose>
);

// Specify prop types and default values for props
Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

// Module exports
export default Spinner;
