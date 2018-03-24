// Module dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as modalActions from '../../../../data/interfaces/modal/actions';
import { getModal } from '../../../../data/interfaces/modal/reducer';
import * as commonActions from '../../actions';

// Peer dependencies
import * as dataActions from './data/survey/actions';
import { getSurvey } from './data/survey/reducer';
import { getUI } from './reducer';
import UI from './UI';

// Map state to props
const mapStateToProps = state => ({
  state: {
    data: {
      survey: getSurvey(state),
      interfaces: {
        modal: getModal(state)
      }
    },
    ui: getUI(state)
  }
});

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
const container = connect(mapStateToProps, mapDispatchToProps)(UI);

// Module exports
export default container;
