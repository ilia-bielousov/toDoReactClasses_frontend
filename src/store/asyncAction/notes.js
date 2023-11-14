import { getNotes } from "../clientReducer";

export const getAllNotes = () => {
  return function (dispatch) {
    fetch('http://localhost:5000/notes', {
      method: 'GET',
      headers: {
        authorization: window.localStorage.getItem('token')
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch(getNotes(data));
      });
  }
}