// Action types
const REGISTER_REQUEST = 'REGISTER_REQUEST';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAILURE = 'REGISTER_FAILURE';

// Action creators
const startRegister = () => ({
  type: REGISTER_REQUEST
});

const receiveUser = user => ({
  type: REGISTER_SUCCESS,
  user
});

const failedRegister = () => ({
  type: REGISTER_FAILURE
});

export const register = data => async dispatch => {
  dispatch(startRegister());
  const response = await fetch('/api/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const body = await response.json();
  console.log(body);
  if (body.status === 'success') {
    dispatch(receiveUser(body.data.user));
    localStorage.setItem('act', body.token);
  } else {
    dispatch(failedRegister());
  }
};

const initialState = {
  isFetching: false,
  loggedIn: false,
  session: {}
};
// Reducer
export const user = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case REGISTER_SUCCESS:
      return {
        isFetching: false,
        loggedIn: true,
        session: action.user
      };
    case REGISTER_FAILURE:
      return initialState;
    default:
      return state;
  }
};
