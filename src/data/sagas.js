// Sagas
import dataCredits from './credits/sagas';
import dataSession from './session/sagas';

// Combine Sagas
const sagas = {
  dataCredits,
  dataSession
};

// Module exports
export default sagas;
