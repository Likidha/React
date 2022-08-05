import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import { loadUsers } from "../redux/actions";

//material.ui
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
//import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles'


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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const Home = () => {

  
  let dispatch = useDispatch();

  //useEffect to api call
  useEffect( () => {
    dispatch(loadUsers());
  },  )

  return (
    <div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>FirstName</StyledTableCell>
            <StyledTableCell align="right">LastName</StyledTableCell>
            <StyledTableCell align="right">Contact</StyledTableCell>
            <StyledTableCell align="right">Contact No</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
          </TableRow>
        </TableHead>
    
      </Table>
    </TableContainer>

    </div>
  );
}


export default Home;