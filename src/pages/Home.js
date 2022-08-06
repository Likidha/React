import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import { deleteUser, loadUsers } from "../redux/actions";
import { useNavigate} from 'react-router-dom';

//material.ui
import Button from '@mui/material/Button';
//import { useHistory} from "react-router-dom";
//import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
//import { ThemeProvider, createTheme } from '@mui/material/styles'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



  
const Home = () => {

  //Using selector to display data in ui page
  const {users} = useSelector(state => state.data)


  let dispatch = useDispatch();
  //useEffect to api call
  useEffect( () => {
    dispatch(loadUsers());
  }, [] )


//warning to delete
  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete the sure?")){
     
      dispatch(deleteUser(id));
    }
  }


  //to navigate to addUser page
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate('/addUser');
  };

  return (
    
        <div>
        <Grid container spacing={2}>
        <Grid item xs={8}>
        <h1>home</h1>
        </Grid>
        <Grid style={{marginTop: "34px"}} item xs={4}>
        <Button  variant="contained" color="primary" onClick={navigateToContacts}>New User</Button>
       </Grid>
       </Grid>
        
      <div>
      
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 440 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((user) => (
            <StyledTableRow key={users.id}>
              <StyledTableCell component="th" scope="row">
                {user.name}
              </StyledTableCell>
              <StyledTableCell align="center">{user.email}</StyledTableCell>
              <StyledTableCell align="center">{user.contact}</StyledTableCell>
              <StyledTableCell align="center">{user.address}</StyledTableCell>
              <StyledTableCell align="center">
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
               <Button style={{marginRight: "10px"}} color="primary" onClick={ () => handleDelete(users.id)}>Delete</Button>
               <Button color="primary" onClick={ () => navigate(`/editUser/${users.id}`)}>Edit</Button>
            </ButtonGroup>
            </StyledTableCell>
            </StyledTableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
    </div>
  );
  
}


export default Home;