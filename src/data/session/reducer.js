// Actions
import { SIGNUP, SIGNUP_FAILURE, SIGNUP_SUCCESS } from './actions';

// Initial state
const initialState = {
  authorization: false,
  verifying: false,
  user: null
};

// Data model
const dataModel = data => ({
  authorization: true,
  verifying: false,
  user: {
    id: data.id,
    email: data.email,
    name: data.name,
    photo: data.photo
  }
});

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    // Sign-up
    case SIGNUP:
      return state;
    case SIGNUP_FAILURE:
      return state;
    case SIGNUP_SUCCESS:
      return {
        ...state,
        ...dataModel(action.payload.user)
      };
    default:
      return state;
  }
};
