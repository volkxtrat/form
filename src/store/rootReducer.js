import { combineReducers } from "redux";
import todoReducer from "./reducers/todo";
import userReducer from "./reducers/user";

export default combineReducers({
  user: userReducer,
  todo: todoReducer,
});
