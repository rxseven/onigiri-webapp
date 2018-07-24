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
import * as creditsActions from 'data/credits/actions';
import { getCredits } from 'data/credits/reducers';
import * as modalActions from 'data/interfaces/modal/actions';
import { getModal } from 'data/interfaces/modal/reducers';
import { deleteUser } from 'data/session/actions';
import * as profileActions from './data/profile/actions';
import { getProfile } from './data/profile/reducers';
import { getUI } from './reducers';

// Companion files
import UI from './UI';

// Map state to props
const mapStateToProps = state =>
  generateState(STATE_MODELS.immutable
    .setIn(['data', 'credits'], getCredits(state))
    .setIn(['data', 'interfaces', 'modal'], getModal(state))
    .setIn(['data', 'profile'], getProfile(state))
    .setIn(['ui'], getUI(state)));

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    credits: bindActionCreators(creditsActions, dispatch),
    modal: bindActionCreators(modalActions, dispatch),
    profile: bindActionCreators(profileActions, dispatch),
    user: bindActionCreators({ deleteUser }, dispatch)
  }
});

// Connect component to application state
const container = connect(mapStateToProps, mapDispatchToProps)(toJS(UI));

// Module exports
export default container;
