// Module dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Helper functions
import { generateState } from 'helpers/state';

// Components and HOCs
import toJS from 'HOCs/state/toJS';

// Constants
import STATE_MODELS from 'constants/models/state';

// Action creators and selectors
import { oauthFacebook, oauthFailure, oauthRequest } from 'data/session/actions';
import { getSession } from 'data/session/reducers';

// Companion files
import UI from './UI';

// Map state to props
const mapStateToProps = state =>
  generateState(STATE_MODELS.immutable.setIn(['data', 'session'], getSession(state)));

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators({ oauthFacebook, oauthFailure, oauthRequest }, dispatch)
  }
});

// Connect component to application state
const container = connect(mapStateToProps, mapDispatchToProps)(toJS(UI));

// Module exports
export default container;
