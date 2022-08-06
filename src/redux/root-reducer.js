import {combineReducers } from "redux";
import userReducers from "./reducer";

const rootReducer = combineReducers ({
  data: userReducers //users key to access state from the redux store
});

export default rootReducer;