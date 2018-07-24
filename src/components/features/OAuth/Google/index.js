// Module dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { generateState } from '../../../../helpers/state';
import toJS from '../../../../HOCs/state/toJS';
import { oauthGoogle, oauthFailure, oauthRequest } from '../../../../data/session/actions';
import { getSession } from '../../../../data/session/reducers';

// Constants
import STATE_MODELS from '../../../../constants/models/state';

// Peer dependencies
import UI from './UI';

// Map state to props
const mapStateToProps = state =>
  generateState(STATE_MODELS.immutable.setIn(['data', 'session'], getSession(state)));

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators({ oauthGoogle, oauthFailure, oauthRequest }, dispatch)
  }
});

// Connect component to application state
const container = connect(mapStateToProps, mapDispatchToProps)(toJS(UI));

// Module exports
export default container;
