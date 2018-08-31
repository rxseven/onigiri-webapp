// Module dependencies
import { connect } from 'react-redux';

// Components and HOCs
import toJS from 'HOCs/state/toJS';

// Action creators and selectors
import { getSession } from 'data/session/reducers';

// Companion files
import UI from './UI';

// Map state to props
const mapStateToProps = state => ({ session: getSession(state) });

// Connect UI component to application state
const container = connect(mapStateToProps)(toJS(UI));

// Module exports
export default container;
