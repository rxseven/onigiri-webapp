// Module dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { generateState } from '../../../helpers/data';
import toJS from '../../../HOCs/toJS';
import { checkout } from '../../../data/credits/actions';
import { getUI } from '../../../data/features/payments/reducers';

// Constants
import STATE_MODELS from '../../../constants/models/state';

// Peer dependencies
import UI from './UI';

// Map state to props
const mapStateToProps = state => generateState(STATE_MODELS.immutable.setIn(['ui'], getUI(state)));

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    payments: bindActionCreators({ checkout }, dispatch)
  }
});

// Connect component to application state
const container = connect(mapStateToProps, mapDispatchToProps)(toJS(UI));

// Module exports
export default container;
