import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchUSerObj, FunctionEditUser } from "../Redux/Action";



const Updateuser = () => {

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("Staff");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const{code} = useParams();

  const userobj = useSelector((state)=>state.user.userobj)


  const handleSubmit = (e) => {
    e.preventDefault();
    const userobj = {  id,name, email, phone, role };
    dispatch(FunctionEditUser(userobj,id));
    navigate("/user")
  };


  useEffect(()=>{
    dispatch(FetchUSerObj(code))
  },[])

  useEffect(()=>{
    if(userobj){
      setId(userobj.id);
      setName(userobj.name);
      setEmail(userobj.email);
      setPhone(userobj.phone);
      setRole(userobj.role);
    }
  },[userobj])

  return (
    <Box
    style={{
        display: "flex",
        alignItems: "center",
        justyfyContent: "center",
        flexDirection: "column",
        gap: 10,
      }}> 
       <Box>
        <Typography variant="h4" align="center" marginLeft={3}>
          {" "}
          Add User
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          width: 400,
          gap: 10,
          justyfyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <FormControl style={{ gap: 10, width: "500px" }}>
            <TextField
              placeholder="ID"
              type="name"
              size="small"
              fullWidth
              value={id || " "}
              disabled
            />
            <TextField
              placeholder="Name"
              type="text"
              size="small"
              fullWidth
              value={name || " "}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              placeholder="Email"
              type="email"
              size="small"
              fullWidth
              value={email || " "}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              placeholder="Phone"
              type="phone"
              size="small"
              fullWidth
              value={phone || ''}
              onChange={(e) => setPhone(e.target.value)}
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={role || ' '}
                label="Role"
                size="small"
                // onChange={handleChange()}
                onChange={(e) => setRole(e.target.value)}
              >
                <MenuItem value={"Admin"}>Admin</MenuItem>
                <MenuItem value={"Staff"}>Staff</MenuItem>
              </Select>

              <Box mt={1}>
                <Button
                  type="submit"
                  style={{ background: "blue", color: "white" }}
                  size="small"
                >
                  Submit
                </Button>
                <Link to={"/user"}>
                  <Button
                  
                    style={{ background: "red", color: "white" }}
                    size="small"
                  >
                    back
                  </Button>
                </Link>
              </Box>
            </FormControl>
          </FormControl>
        </form>
      </Box>
  
    </Box>
  )
};

export default Updateuser;

  

  
  
  // // console.log("ID",id)
  // console.log("userobj",userobj)

    

    



        
  //   // >
     