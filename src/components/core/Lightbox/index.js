// Module dependencies
import { connect } from 'react-redux';

import { generateState } from 'helpers/state';
import toJS from 'HOCs/state/toJS';
import { getSession } from 'data/session/reducers';

// Constants
import STATE_MODELS from 'constants/models/state';

// Peer dependencies
import UI from './UI';

// Map state to props
const mapStateToProps = state =>
  generateState(STATE_MODELS.immutable.setIn(['data', 'session'], getSession(state)));

// Connect UI component to application state
const container = connect(mapStateToProps)(toJS(UI));

// Module exports
export default container;
