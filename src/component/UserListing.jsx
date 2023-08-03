import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
// import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FetchUSerlist, RemoveUser } from "../Redux/Action";
import { connect } from "react-redux";
// import Paper from '@mui/material/Paper';
import {  Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const UserListing = (props) => {
  
  useEffect(() => {
    props.loadUser();
  }, []);

  const handleDelete = (code) => {
    if(window.confirm('Are you sure you want to delete ?')) {
      props.removeUser(code);
      props.loadUser();
      toast.success('User removed successfully')
    }
  }
  console.log(props.user.userlist)
  return props.user.loading ? (
    <div>
      <h2>loading.... </h2>
    </div>
  ) : props.user.errormessage ? (
    <div>
      <h2>{props.user.errormessage}</h2>
    </div>
  ) : (
    <Box>
      <Box style={{ display: "flex", justifyContent: "end", marginTop: "5px" }} >
        <Link to={'/user/add'}>
        <Button
          style={{
            textAlign: "center",
            marginRight: "25px",
            background: "orange",
            color: "white",
          }}
        >
          Adduser[+]
        </Button>
        </Link>
      </Box>
      <Box style={{ marginTop: "5px" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Code</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Phone</StyledTableCell>
                <StyledTableCell>Role</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.user.userlist &&
                props.user.userlist.map((item) => (
                  <StyledRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>{item.role}</TableCell>
                    <TableCell>
                      <Link to={'/user/edit/'+ item.id}>
                        <Button
                          style={{ background: "orange", color: "white" }}
                          size="small"
                        >
                          Edit
                        </Button>
                      </Link>
                      
                        <Button
                          style={{
                            background: "blue",
                            color: "white",
                            marginLeft: "10px",
                          }}
                          size="small"
                          onClick={()=> handleDelete(item.id)}
                        >
                          Delete
                        </Button>
                      
                    </TableCell>
                  </StyledRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <ToastContainer position="top-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover/>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(FetchUSerlist()),
    removeUser : (code) => dispatch(RemoveUser(code))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListing);
