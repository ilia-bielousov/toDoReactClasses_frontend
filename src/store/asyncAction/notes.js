import { getNotes } from "../clientReducer";

export const getAllNotes = () => {
  return function (dispatch) {
    fetch(`${process.env.REACT_APP_API_URL}notes`, {
      method: 'GET',
      headers: {
        authorization: window.localStorage.getItem('token')
      },
    })
      .then(res => res.json())
      .then(data => {
        dispatch(getNotes(data));
      });
  }
}