// Module dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { generateState } from '../../../../helpers/state';
import toJS from '../../../../HOCs/state/toJS';
import * as commonActions from '../../actions';

// Constants
import STATE_MODELS from '../../../../constants/models/state';

// Peer dependencies
import * as dataActions from './data/surveys/actions';
import { getSurveys } from './data/surveys/reducers';
import * as uiActions from './actions';
import { getUI, getView } from './reducers';
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
