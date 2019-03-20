import { SET_USER } from "./actionTypes";

export function setUser(user) {
  return dispatch => {
    dispatch({ type: SET_USER, payload: { currentUser: user } });
  };
}
