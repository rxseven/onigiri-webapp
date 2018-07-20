// Action types
export const LANDING_GET = 'Landing/data/LANDING_GET';
export const LANDING_GET_FAILURE = 'Landing/data/LANDING_GET_FAILURE';
export const LANDING_GET_SUCCESS = 'Landing/data/LANDING_GET_SUCCESS';

export const LANDING_RESET_DATA = 'Landing/data/LANDING_RESET_DATA';

// Get landing page URI : Start
export const getLanding = id => ({
  payload: { id },
  type: LANDING_GET
});

// Get landing page URI : Failure
export const getLandingFailure = error => ({
  payload: error,
  type: LANDING_GET_FAILURE
});

// Get landing page URI : Success
export const getLandingSuccess = data => ({
  payload: data,
  type: LANDING_GET_SUCCESS
});

// Reset state
export const resetData = () => ({
  type: LANDING_RESET_DATA
});
