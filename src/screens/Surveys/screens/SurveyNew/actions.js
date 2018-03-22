// Module dependencies
import * as surveysService from '../../../../services/surveys';

// Actions
export const SURVEY_CREATE = 'SurveyNew/SURVEY_CREATE';
export const SURVEY_CREATE_FAILURE = 'SurveyNew/SURVEY_CREATE_FAILURE';
export const SURVEY_CREATE_SUCCESS = 'SurveyNew/SURVEY_CREATE_SUCCESS';

// Create survey : Success
const createSurveySuccess = data => ({
  type: SURVEY_CREATE_SUCCESS,
  payload: data
});

// Create survey : Failure
const createSurveyFailure = error => ({
  type: SURVEY_CREATE_FAILURE,
  payload: error.response.data.error
});

// Create survey : Start (loading)
export const createSurvey = (values, callback) => async (dispatch) => {
  try {
    // 1. Inform a reducer that the request began (loading)
    dispatch({ type: SURVEY_CREATE });

    // 2. Create survey and send emails
    // 3. Retrieve data in a response and transform to an appropriate format
    const { data } = await surveysService.createSurvey(values);

    // 4. Inform reducers that the request finished successfully
    dispatch(createSurveySuccess());

    // 5. Execute a callback
    callback(data.id);
  } catch (error) {
    // Inform a reducer that the request failed
    dispatch(createSurveyFailure(error));
  }
};
