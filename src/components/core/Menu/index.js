// Module dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { action as toggleMenu } from 'redux-burger-menu';

import { signOut } from '../../../data/session/actions';
import { getSession } from '../../../data/session/reducer';

// Peer dependencies
import UI from './UI';

// Map state to props
const mapStateToProps = state => ({
  data: {
    interface: {
      menu: state.burgerMenu
    },
    session: getSession(state)
  }
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators({ signOut }, dispatch),
    menu: bindActionCreators({ toggleMenu }, dispatch)
  }
});

// Connect component to application state
const container = connect(mapStateToProps, mapDispatchToProps)(UI);

// Module exports
export default container;
