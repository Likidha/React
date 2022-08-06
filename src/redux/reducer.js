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
      case types.DELETE_USER:
      case types.ADD_USER:
        return {
          ...state,
          loading:false,
        };
        case types.GET_SINGLE_USER:
        return {
          ...state,
          users: action.payload,
          loading:false,
        };
        case types.UPDATE_USER:
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