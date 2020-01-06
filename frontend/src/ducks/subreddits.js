// Action types
const REQUEST_SUBREDDITS = 'REQUEST_SUBREDDITS';
const RECEIVE_SUBREDDITS = 'RECEIVE_SUBREDDITS';
const INVALIDATE_SUBREDDITS = 'INVALIDATE_SUBREDDITS';

// Action creators
const requestSubreddits = () => ({
  type: REQUEST_SUBREDDITS
});

const receiveSubreddits = subreddits => ({
  type: RECEIVE_SUBREDDITS,
  subreddits,
  receivedAt: Date.now()
});

const invalidateSubreddits = () => ({
  type: INVALIDATE_SUBREDDITS
});

export const fetchSubreddits = () => async dispatch => {
  // Inform that the API call is starting
  dispatch(requestSubreddits());
  const response = await fetch('/api/subreddits');
  const body = await response.json();
  if (body.status === 'success') {
    dispatch(receiveSubreddits(body.data.subreddits));
  }
};

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: []
};
// Reducer
export const subreddits = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SUBREDDITS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case RECEIVE_SUBREDDITS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.subreddits,
        lastUpdated: action.receivedAt
      };
    case INVALIDATE_SUBREDDITS:
      return {
        ...state,
        didInvalidate: true
      };
    default:
      return state;
  }
};
