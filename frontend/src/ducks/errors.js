// Action types
const CLEAR_ERRORS = 'CLEAR_ERRORS';

// Action creators
export const clearErrors 

// Reducer
export const errors = (state = null, action) => {
  if (action.type === CLEAR_ERRORS) {
    return null;
  }
  if (action.error) {
    return error;
  }
  return state;
};
