// Sagas
import surveys from './Surveys/sagas';
import users from './Users/sagas';

// Combine Sagas
const sagas = {
  ...surveys,
  ...users
};

// Module exports
export default sagas;
