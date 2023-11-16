const defaultState = {
  logged: false,
  choose: 'Personal',
  noteMsg: '',
  user: {
    username: '',
    password: ''
  },
  notes: [],
  diff: false
};

const LOGGED_TRUE = 'LOGGED_TRUE';
const LOGGED_FALSE = 'LOGGED_FALSE';
const INPUT_NOTE = 'INPUT_NOTE';
const INPUT_USER = 'INPUT_USER';
const INPUT_CHOOSE = 'INPUT_CHOOSE';
const GET_NOTES = 'GET_NOTES';
const UPDATE_NOTE = 'UPDATE_NOTE';
const CHANGES = 'CHANGES';



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
    case INPUT_NOTE:
      return { ...state, noteMsg: action.payload }
    case GET_NOTES:
      return { ...state, notes: [...action.payload] }
    case UPDATE_NOTE:
      return { ...state, notes: [...state.notes, { ...action.payload }] }
    case CHANGES:
      return { ...state, diff: action.payload }
    default:
      return state;
  }
}

export const loggedTrue = (payload) => ({ type: LOGGED_TRUE, payload });
export const loggedFalse = (payload) => ({ type: LOGGED_FALSE, payload });
export const inputUser = (payload) => ({ type: INPUT_USER, payload });
export const inputChoose = (payload) => ({ type: INPUT_CHOOSE, payload });
export const inputNoteMsg = (payload) => ({ type: INPUT_NOTE, payload });
export const getNotes = (payload) => ({ type: GET_NOTES, payload });
export const updateNote = (payload) => ({ type: UPDATE_NOTE, payload });
export const doChange = (payload) => ({ type: CHANGES, payload });