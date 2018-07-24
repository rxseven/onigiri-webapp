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
import * as commonActions from '../../actions';
import * as dataActions from './data/surveys/actions';
import { getSurveys } from './data/surveys/reducers';
import * as uiActions from './actions';
import { getUI, getView } from './reducers';

// Companion files
import UI from './UI';

// Map state to props
const mapStateToProps = state =>
  generateState(STATE_MODELS.immutable
    .setIn(['data', 'surveys'], getSurveys(state))
    .setIn(['ui'], getUI(state))
    .setIn(['view'], getView(state)));

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    surveys: bindActionCreators(
      {
        ...uiActions,
        ...commonActions,
        ...dataActions
      },
      dispatch
    )
  }
});

// Connect component to application state
const container = connect(mapStateToProps, mapDispatchToProps)(toJS(UI));

// Module exports
export default container;
