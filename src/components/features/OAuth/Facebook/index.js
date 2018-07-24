// Module dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { oauthFacebook, oauthFailure, oauthRequest } from 'data/session/actions';
import { getSession } from 'data/session/reducers';

import { generateState } from 'helpers/state';

import toJS from 'HOCs/state/toJS';

import STATE_MODELS from 'constants/models/state';

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
