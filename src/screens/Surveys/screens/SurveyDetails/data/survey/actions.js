// Module dependencies
import * as surveysService from '../../../../../../services/surveys';

// Actions
export const RECIPIENTS_GET = 'Survey/data/RECIPIENTS_GET';
export const RECIPIENTS_GET_FAILURE = 'Survey/data/RECIPIENTS_GET_FAILURE';
export const RECIPIENTS_GET_SUCCESS = 'Survey/data/RECIPIENTS_GET_SUCCESS';

export const SURVEY_GET = 'Survey/data/SURVEY_GET';
export const SURVEY_GET_FAILURE = 'Survey/data/SURVEY_GET_FAILURE';
export const SURVEY_GET_SUCCESS = 'Survey/data/SURVEY_GET_SUCCESS';

// Get recipients : Success
const getRecipientsSuccess = data => ({
  type: RECIPIENTS_GET_SUCCESS,
  payload: data
});

// Get recipients : Failure
const getRecipientsFailure = error => ({
  type: RECIPIENTS_GET_FAILURE,
  payload: error.response.data.error
});

// Get recipients : Start (loading)
export const getRecipients = (id, callback) => async (dispatch) => {
  try {
    // 1. Inform a reducer that the request began (loading)
    dispatch({ type: RECIPIENTS_GET });

    // 2. Get recipients
    // 3. Retrieve data in a response and transform to an appropriate format
    const { data } = await surveysService.getRecipients(id);

    // 4. Inform a reducer that the request finished successfully
    dispatch(getRecipientsSuccess(data));

    // 5. Execute a callback
    if (callback) {
      callback();
    }
  } catch (error) {
    // Inform a reducer that the request failed
    dispatch(getRecipientsFailure(error));
  }
};

// Get survey : Success
const getSurveySuccess = data => ({
  type: SURVEY_GET_SUCCESS,
  payload: data
});

// Get survey : Failure
const getSurveyFailure = error => ({
  type: SURVEY_GET_FAILURE,
  payload: error.response.data.error
});

// Get survey : Start (loading)
export const getSurvey = (id, callback) => async (dispatch) => {
  try {
    // 1. Inform a reducer that the request began (loading)
    dispatch({ type: SURVEY_GET });

    // 2. Get survey
    // 3. Retrieve data in a response and transform to an appropriate format
    const { data } = await surveysService.getSurvey(id);

    // 4. Inform a reducer that the request finished successfully
    dispatch(getSurveySuccess(data));

    // 5. Execute a callback
    if (callback) {
      callback();
    }
  } catch (error) {
    // Inform a reducer that the request failed
    dispatch(getSurveyFailure(error));
  }
};
