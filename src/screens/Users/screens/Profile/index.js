// Module dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteUser } from '../../../../data/session/actions';

import * as modalActions from '../../../../data/interfaces/modal/actions';
import { getModal } from '../../../../data/interfaces/modal/reducer';

// Peer dependencies
import * as profileActions from './data/profile/actions';
import { getProfile } from './data/profile/reducer';
import { getUI } from './reducer';
import UI from './UI';

// Map state to props
const mapStateToProps = state => ({
  state: {
    data: {
      interfaces: {
        modal: getModal(state)
      },
      profile: getProfile(state)
    },
    ui: getUI(state)
  }
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    modal: bindActionCreators(modalActions, dispatch),
    profile: bindActionCreators(profileActions, dispatch),
    user: bindActionCreators({ deleteUser }, dispatch)
  }
});

// Connect component to application state
const container = connect(mapStateToProps, mapDispatchToProps)(UI);

// Module exports
export default container;
