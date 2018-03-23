// Module dependencies
import * as surveysService from '../../services/surveys';

// Actions
export const SURVEY_DELETE = 'Survey/SURVEY_DELETE';
export const SURVEY_DELETE_FAILURE = 'Survey/SURVEY_DELETE_FAILURE';
export const SURVEY_DELETE_SUCCESS = 'Survey/SURVEY_DELETE_SUCCESS';

// Delete survey : Success
const deleteSurveySuccess = data => ({
  type: SURVEY_DELETE_SUCCESS,
  payload: data.id
});

// Delete survey : Failure
const deleteSurveyFailure = error => ({
  type: SURVEY_DELETE_FAILURE,
  payload: error.response.data.error
});

// Delete survey : Start (loading)
export const deleteSurvey = (id, callback) => async (dispatch) => {
  try {
    // 1. Inform a reducer that the request began (loading)
    dispatch({ type: SURVEY_DELETE });

    // 2. Delete survey
    // 3. Retrieve data in a response and transform to an appropriate format
    const { data } = await surveysService.deleteSurvey(id);

    // 4. Inform a reducer that the request finished successfully
    dispatch(deleteSurveySuccess(data));

    // 5. Execute a callback
    callback(data.id);
  } catch (error) {
    // Inform a reducer that the request failed
    dispatch(deleteSurveyFailure(error));
  }
};
