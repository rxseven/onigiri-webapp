// Module dependencies
import * as surveysService from '../../../../../../services/surveys';

// Actions
export const LANDING_GET = 'Survey/data/LANDING_GET';
export const LANDING_GET_FAILURE = 'Survey/data/LANDING_GET_FAILURE';
export const LANDING_GET_SUCCESS = 'Survey/data/LANDING_GET_SUCCESS';

// Actions
export const LANDING_RESET_DATA = 'Survey/data/LANDING_RESET_DATA';

// Get landing page URI : Success
const getLandingSuccess = data => ({
  type: LANDING_GET_SUCCESS,
  payload: data
});

// Get landing page URI : Failure
const getLandingFailure = error => ({
  type: LANDING_GET_FAILURE,
  payload: error.response.data.error
});

// Get landing page URI : Start (loading)
export const getLanding = (id, callback) => async (dispatch) => {
  try {
    // 1. Inform a reducer that the request began (loading)
    dispatch({ type: LANDING_GET });

    // 2. Get landing page URI
    // 3. Retrieve data in a response and transform to an appropriate format
    const { data } = await surveysService.getLanding(id);

    // 4. Inform a reducer that the request finished successfully
    dispatch(getLandingSuccess(data));

    // 5. Execute a callback
    if (callback) {
      callback();
    }
  } catch (error) {
    // Inform a reducer that the request failed
    dispatch(getLandingFailure(error));
  }
};

// Reset state
export const resetData = () => ({
  type: LANDING_RESET_DATA
});
