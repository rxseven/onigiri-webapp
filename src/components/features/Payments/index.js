// Module dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Helper functions
// import { generateState } from 'helpers/state';

// Components and HOCs
import toJS from 'HOCs/state/toJS';

// Constants
// import STATE_MODELS from 'constants/models/state';

// Action creators and selectors
import { checkout } from 'data/credits/actions';
import { getAsync } from 'data/features/payments/reducers';

// Companion files
import UI from './UI';

// Map state to props
const mapStateToProps = state => ({
  asynchronous: getAsync(state)
});

// Map dispatch to props
const mapDispatchToProps = dispatch => bindActionCreators({ checkout }, dispatch);

// Connect component to application state
const container = connect(mapStateToProps, mapDispatchToProps)(toJS(UI));

// Module exports
export default container;
