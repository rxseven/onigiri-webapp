// Module dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Peer dependencies
import * as dataActions from './data/surveys/actions';
import { getSurveys } from './data/surveys/reducer';
import { getUI } from './reducer';
import UI from './UI';

// Map state to props
const mapStateToProps = state => ({
  state: {
    data: {
      surveys: getSurveys(state)
    },
    ui: getUI(state)
  }
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    surveys: bindActionCreators(
      {
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
