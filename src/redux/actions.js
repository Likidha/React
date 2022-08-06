import * as types from "./actionType";
import axios from "axios";



const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const userDeleted = (id) => ({
  type:types.DELETE_USER,
});

const userAdded = () => ({
  type:types.ADD_USER,
});

 

export const loadUsers = () => {
  return function (dispatch) {

    axios.get("http://localhost:8811/user", {
     /* headers: {
        "Access-Control-Allow-Origin": 'http://localhost:8811'
      }*/
    })
      .then((resp) => {
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


//delete user
export const deleteUser = (id) => {
  return function (dispatch) {

    axios.delete(`http://localhost:8811/user=${id}`, {
      headers: {
        "Access-Control-Allow-Origin": 'http://localhost:8811',  "Content-Type": "application/json"
      },
      params: {
        id: id
      }
    })
      .then((resp) => {
        console.log("resp", resp);
        dispatch(userDeleted);
        dispatch(loadUsers());
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








//add user from form
export const addUser = (user) => {
  return function (dispatch) {

    axios.post("http://localhost:8811/user", user
     /*headers: {
        "Access-Control-Allow-Origin": 'http://localhost:8811'
      }*/
    
    )
      .then((resp) => {
        console.log("resp", resp);
        dispatch(userAdded());
        dispatch(loadUsers());
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

//get single user - edit form
 
export let getEdit = (id) => {

  getEdit = (user) => ({
    type: types.GET_SINGLE_USER,
    payload: user,
  });
  
  
  return function (dispatch) {

    axios.get(`http://localhost:8811/user=${id}`, {
     /*headers: {
        "Access-Control-Allow-Origin": 'http://localhost:8811'
      */
    })
      .then((resp) => {
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


//update user from edit 
export let userUpdate = (user, id) => {

  userUpdate = (user) => ({
    type: types.UPDATE_USER,
    payload: user,
  });
  
  return function (dispatch) {

    axios.post(`http://localhost:8811/user/${id}`, user
     /*headers: {
        "Access-Control-Allow-Origin": 'http://localhost:8811'
      }*/
    
    )
      .then((resp) => {
        console.log("resp", resp);
        dispatch(userUpdate());
        dispatch(loadUsers());
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