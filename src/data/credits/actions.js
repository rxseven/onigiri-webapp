// Module dependencies
import * as usersService from '../../services/users';

// Actions
export const CREDITS_GET = 'data/credits/CREDITS_GET';
export const CREDITS_GET_FAILURE = 'data/credits/CREDITS_GET_FAILURE';
export const CREDITS_GET_SUCCESS = 'data/credits/CREDITS_GET_SUCCESS';

// Get credits : Success
const getCreditsSuccess = data => ({
  type: CREDITS_GET_SUCCESS,
  payload: data
});

// Get credits : Failure
const getCreditsFailure = error => ({
  type: CREDITS_GET_FAILURE,
  payload: error.response.data.error
});

// Get credits : Start (loading)
export const getCredits = () => async (dispatch) => {
  try {
    // 1. Inform a reducer that the request began (loading)
    dispatch({ type: CREDITS_GET });

    // 2. Get credits
    // 3. Retrieve data in a response and transform to an appropriate format
    const { data } = await usersService.getCredits();

    // 4. Inform a reducer that the request finished successfully
    dispatch(getCreditsSuccess(data));
  } catch (error) {
    // Inform a reducer that the request failed
    dispatch(getCreditsFailure(error));
  }
};
