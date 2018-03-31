// Module dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as commonActions from '../../actions';

// Peer dependencies
import * as dataActions from './data/surveys/actions';
import { getSurveys } from './data/surveys/reducer';
import * as uiActions from './actions';
import { getUI, getView } from './reducer';
import UI from './UI';

// Map state to props
const mapStateToProps = state => ({
  state: {
    data: {
      surveys: getSurveys(state)
    },
    ui: getUI(state),
    view: getView(state)
  }
});

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
const container = connect(mapStateToProps, mapDispatchToProps)(UI);

// Module exports
export default container;
