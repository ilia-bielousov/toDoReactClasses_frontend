const defaultState = {
  logged: false,
  choose: 'Personal',
  user: {
    username: '',
    password: ''
  },
  notes: [],
};

const LOGGED_TRUE = 'LOGGED_TRUE';
const LOGGED_FALSE = 'LOGGED_FALSE';
const INPUT_USER = 'INPUT_USER';
const INPUT_CHOOSE = 'INPUT_CHOOSE';
const GET_NOTES = 'GET_NOTES';


export const clientReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGGED_TRUE:
      return { ...state, logged: true };
    case LOGGED_FALSE:
      return { ...state, logged: false };
    case INPUT_USER:
      return { ...state, user: { ...action.payload } }
    case INPUT_CHOOSE:
      return { ...state, choose: action.payload }
    case GET_NOTES: 
      return { ...state, notes: [...state.notes, ...action.payload]}
    default:
      return state;
  }
}

export const loggedTrue = (payload) => ({ type: LOGGED_TRUE, payload });
export const loggedFalse = (payload) => ({ type: LOGGED_FALSE, payload });
export const inputUser = (payload) => ({ type: INPUT_USER, payload });
export const inputChoose = (payload) => ({ type: INPUT_CHOOSE, payload});
export const getNotes = (payload) => ({ type: GET_NOTES, payload});