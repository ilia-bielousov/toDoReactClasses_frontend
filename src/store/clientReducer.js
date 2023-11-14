const defaultState = {
  logged: false,
  user: {
    username: '',
    password: ''
  },

};

const LOGGED_TRUE = 'LOGGED_TRUE';
const LOGGED_FALSE = 'LOGGED_FALSE';
const INPUT_USER = 'INPUT_USER';


export const clientReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGGED_TRUE:
      return { ...state, logged: true };
    case LOGGED_FALSE:
      return { ...state, logged: false };
    case INPUT_USER:
      return {
        ...state, user: { ...action.payload }
      }

    default:
      return state;
  }
}

export const loggedTrue = (payload) => ({ type: LOGGED_TRUE, payload });
export const loggedFalse = (payload) => ({ type: LOGGED_FALSE, payload });
export const inputUser = (payload) => ({ type: INPUT_USER, payload });