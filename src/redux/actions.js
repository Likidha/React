import* as types from "./actionType";
import axios from "axios";



const getUsers = (users) => ({
  type:types.GET_USERS,
  payload:users,
});

export const loadUsers = () => {
  return function (dispatch){
  
    axios
    .get(`${process.env.REACT_APP_API}`)
    .then( (resp) => {
      console.log("resp", resp);
      dispatch(getUsers(resp.data));
    })
    .catch(function (error) {
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
    }
    );
  };
};