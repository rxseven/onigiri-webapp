// Module dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Peer dependencies
import * as dataActions from './data/landing/actions';
import { getLanding } from './data/landing/reducer';
import { getUI } from './reducer';
import UI from './UI';

// Map state to props
const mapStateToProps = state => ({
  state: {
    data: {
      landing: getLanding(state)
    },
    ui: getUI(state)
  }
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    surveys: bindActionCreators({ ...dataActions }, dispatch)
  }
});

// Connect component to application state
const container = connect(mapStateToProps, mapDispatchToProps)(UI);

// Module exports
export default container;
