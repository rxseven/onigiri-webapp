// Module dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSession } from '../../../data/session/reducer';

// Peer dependencies
import UI from './UI';

// Map state to props
const mapStateToProps = state => ({
  data: {
    session: getSession(state)
  }
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

// Connect component to application state
const container = connect(mapStateToProps, mapDispatchToProps)(UI);

// Module exports
export default container;
