// Module dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { checkout } from '../../../data/credits/actions';
import { getUI } from '../../../data/features/payments/reducer';

// Peer dependencies
import UI from './UI';

// Map state to props
const mapStateToProps = state => ({
  state: {
    ui: getUI(state)
  }
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    payments: bindActionCreators({ checkout }, dispatch)
  }
});

// Connect component to application state
const container = connect(mapStateToProps, mapDispatchToProps)(UI);

// Module exports
export default container;
