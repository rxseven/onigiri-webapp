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
export default (state = initialState, action) => state;
