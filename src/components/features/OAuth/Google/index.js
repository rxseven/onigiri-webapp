// Module dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { oauthGoogle, oauthFailure, oauthRequest } from '../../../../data/session/actions';
import { getSession } from '../../../../data/session/reducers';

// Peer dependencies
import UI from './UI';

// Map state to props
const mapStateToProps = state => ({
  state: {
    data: {
      session: getSession(state)
    }
  }
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators({ oauthGoogle, oauthFailure, oauthRequest }, dispatch)
  }
});

// Connect component to application state
const container = connect(mapStateToProps, mapDispatchToProps)(UI);

// Module exports
export default container;
