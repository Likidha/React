import React from "react";
import Box from '@mui/material/Box';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//import {Routes, Route} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import {Link} from "react-router-dom";
import { addUser } from "../redux/actions";
//import { withRouter } from "react-router";
import {useDispatch} from "react-redux";


const AddUser = () =>
{
const[state, setState] = useState({
  name: "",
  email: "",
  contact: "",
  address: "",
});

//user cant submit empty form to the json server
const [error, setError] = useState(" ");

const {name, email, contact, address} = state;
let dispatch = useDispatch();
//to navigate to next page
let navigate = useNavigate();

//to submit form data in reactjs and send data in json
const handleInputChange = (e) => {
  let {name, value} = e.target;
  setState({...state, [name]: value});
};

const handleSubmit = (e) => {
  e.preventDefault();

  if(!name || !address || !email || !contact){
    setError("Please enter all the input field");
  }
  else{
   dispatch(addUser(state));
   navigate('/');
   setError(" ");
  }
  
}



  return( <Box onSubmit={handleSubmit}
    component="form"
    sx={{
      marginTop:"100px", 
      '& > :not(style)': { m: 1, width: '45ch' },
    }}
    noValidate
    autoComplete="off"
   
  >
   
 {error && <h3 style={{color: "red"}}>{error}</h3>}
    <h2>Add User</h2>
   

    <TextField id="standard-basic" label="Name" name="name" variant="standard" value={name} onChange={handleInputChange} type="text"/>
    <br/>
    <TextField id="standard-basic" label="Email Id" variant="standard" name="email" value={email} onChange={handleInputChange} type="email"/>
    <br/>
    <TextField id="standard-basic" label="Contact No" variant="standard" name="contact" value={contact} onChange={handleInputChange}type="number"/>
    <br/>
    <TextField id="standard-basic" label="Address" variant="standard" name="address" value={address} onChange={handleInputChange} type="text" />
    <br/>
    <Stack direction="row" spacing={2}>
      <Button variant="contained" style={{marginTop: "40px" , marginLeft: "557px" , paddingLeft: "55px", paddingRight: "55px" }} ><Link style= {{textDecoration: 'none'}} to="/">Back</Link></Button>
      
      <Button  style={{marginTop: "40px" , width: "100px"}} variant="contained" color="primary"  onChange={handleInputChange} type="submit">Submit</Button>
    </Stack>
    
    
  </Box>
);
}

export default AddUser;