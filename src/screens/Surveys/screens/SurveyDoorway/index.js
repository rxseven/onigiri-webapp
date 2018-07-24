// Module dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { generateState } from '../../../../helpers/state';
import toJS from '../../../../HOCs/state/toJS';

// Constants
import STATE_MODELS from '../../../../constants/models/state';

// Peer dependencies
import * as dataActions from './data/landing/actions';
import { getLanding } from './data/landing/reducers';
import { getUI } from './reducers';
import UI from './UI';

// Map state to props
const mapStateToProps = state =>
  generateState(STATE_MODELS.immutable.setIn(['data', 'landing'], getLanding(state)).setIn(['ui'], getUI(state)));

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    surveys: bindActionCreators({ ...dataActions }, dispatch)
  }
});

// Connect component to application state
const container = connect(mapStateToProps, mapDispatchToProps)(toJS(UI));

// Module exports
export default container;
