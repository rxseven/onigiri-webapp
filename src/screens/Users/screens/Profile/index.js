// Module dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Peer dependencies
import * as profileActions from './data/profile/actions';
import { getProfile } from './data/profile/reducer';
import { getUI } from './reducer';
import UI from './UI';

// Map state to props
const mapStateToProps = state => ({
  state: {
    data: {
      profile: getProfile(state)
    },
    ui: getUI(state)
  }
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    profile: bindActionCreators(profileActions, dispatch)
  }
});

// Connect component to application state
const container = connect(mapStateToProps, mapDispatchToProps)(UI);

// Module exports
export default container;
