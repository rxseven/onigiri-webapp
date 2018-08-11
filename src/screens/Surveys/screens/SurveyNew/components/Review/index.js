// Module dependencies
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

// Helper functions
import { generateState } from 'helpers/state';

// Components and HOCs
import toJS from 'HOCs/state/toJS';

// Constants
import STATE_MODELS from 'constants/models/state';

// Action creators and selectors
import * as surveyActions from '../../actions';
import { getUI } from '../../reducers';

// Companion files
import UI from './UI';

// Map state to props
const mapStateToProps = state =>
  generateState(STATE_MODELS.immutable
    .setIn(['data', 'form'], state.getIn(['form', 'survey', 'values']))
    .setIn(['ui'], getUI(state)));

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    surveys: bindActionCreators(surveyActions, dispatch)
  }
});

// Connect component to application state
const container = withRouter(connect(mapStateToProps, mapDispatchToProps)(toJS(UI)));

// Module exports
export default container;
