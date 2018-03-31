// Module dependencies
import { connect } from 'react-redux';

import { getSession } from '../../../data/session/reducer';

// Peer dependencies
import UI from './UI';

// Map state to props
const mapStateToProps = state => ({
  state: {
    data: {
      session: getSession(state)
    }
  }
});

// Connect UI component to application state
const container = connect(mapStateToProps)(UI);

// Module exports
export default container;
