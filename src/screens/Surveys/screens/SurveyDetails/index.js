// Module dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { generateState } from '../../../../helpers/data';
import toJS from '../../../../HOCs/state/toJS';
import * as modalActions from '../../../../data/interfaces/modal/actions';
import { getModal } from '../../../../data/interfaces/modal/reducers';
import * as commonActions from '../../actions';

// Constants
import STATE_MODELS from '../../../../constants/models/state';

// Peer dependencies
import * as dataActions from './data/survey/actions';
import { getSurvey } from './data/survey/reducers';
import { getUI } from './reducers';
import UI from './UI';

// Map state to props
const mapStateToProps = state =>
  generateState(STATE_MODELS.immutable
    .setIn(['data', 'survey'], getSurvey(state))
    .setIn(['data', 'interfaces', 'modal'], getModal(state))
    .setIn(['ui'], getUI(state)));

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    modal: bindActionCreators(modalActions, dispatch),
    surveys: bindActionCreators(
      {
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
