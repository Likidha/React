import * as types from "./actionType";

const initiaState = {
  users: [], //multiple user
  user: {}, //single user
  loading:true
};

const userReducers = (state = initiaState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading:false,
      };
    default:
      return state;
  }
};

export default userReducers;