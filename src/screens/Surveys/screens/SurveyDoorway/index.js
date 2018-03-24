// Module dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Peer dependencies
import UI from './UI';

// Map state to props
const mapStateToProps = state => ({
  state: {}
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

// Connect component to application state
const container = connect(mapStateToProps, mapDispatchToProps)(UI);

// Module exports
export default container;
