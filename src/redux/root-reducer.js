import {combineReducers } from "redux";
import userReducers from "./reducer";

const rootReducer = combineReducers ({
  users: userReducers //users key to access state from the redux store
});

export default rootReducer;