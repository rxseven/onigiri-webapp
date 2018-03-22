// Module dependencies
import * as surveysService from '../../../../../../services/surveys';

// Actions
export const SURVEYS_CANCEL = 'Surveys/data/SURVEYS_CANCEL';

export const SURVEYS_GET = 'Surveys/data/SURVEYS_GET';
export const SURVEYS_GET_FAILURE = 'Surveys/data/SURVEYS_GET_FAILURE';
export const SURVEYS_GET_SUCCESS = 'Surveys/data/SURVEYS_GET_SUCCESS';

export const SURVEYS_SELECT_MODE = 'Surveys/data/SURVEYS_SELECT_MODE';

// Cancel getting a list of surveys
export const cancelSurveys = () => {
  // 1. Cancel a request
  surveysService.cancelSurveys();

  // 2. Return an action
  return { type: SURVEYS_CANCEL };
};

// Get a list of surveys : Success
const getSurveysSuccess = data => ({
  type: SURVEYS_GET_SUCCESS,
  payload: data
});

// Get a list of surveys : Failure
const getSurveysFailure = error => ({
  type: SURVEYS_GET_FAILURE,
  payload: error.response.data.error
});

// Get a list of surveys : Start (loading)
export const getSurveys = (query, callback) => async (dispatch) => {
  try {
    // 1. Inform a reducer that the request began (loading)
    dispatch({ type: SURVEYS_GET });

    // 2. Get a list of surveys
    // 3. Retrieve data in a response and transform to an appropriate format
    const { data } = await surveysService.getSurveys(query);

    // 4. Inform a reducer that the request finished successfully
    dispatch(getSurveysSuccess(data));

    // 5. Execute a callback
    callback();
  } catch (error) {
    if (error.response) {
      // Inform a reducer that the request failed
      dispatch(getSurveysFailure(error));
    }
  }
};

// Select list view mode
export const selectMode = query => ({
  type: SURVEYS_SELECT_MODE,
  payload: query
});
