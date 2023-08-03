import { ADD_USER, DELETE_USER, EDIT_USER, FAIL_REQUSET, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST } from "./ActionType";
import axios from "axios";
import { toast } from "react-toastify";

export const makeRequset = () => {
  return {
    type: MAKE_REQUEST,
  };
};

export const failRequset = (err) => {
  return {
    type: FAIL_REQUSET,
    payload: err,
  };
};

export const getUserList = (data) => {
  return {
    type: GET_USER_LIST,
    payload: data,
  };
};
export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};
export const addUser = () => {
  return {
    type: ADD_USER,
  };
};
export const editUser =()=>{
  return {
    type: EDIT_USER,
  }
}

export const getUserObj = (data) => {
  return {
    type: GET_USER_OBJ,
    payload: data,
  };
};

export const FetchUSerlist = () => {
  return (dispatch) => {
    dispatch(makeRequset());
    // setTimeout(() => {
      axios.get("http://localhost:3000/user").then((res) => {
        const userlist = res.data;
        dispatch(getUserList(userlist));
      }).catch((err) => {
          dispatch(failRequset(err.message))
      })
  
 
    // },2000)
   
  };
};
export const RemoveUser = (code) => {
  return (dispatch) => {
    dispatch(makeRequset());
    // setTimeout(() => {
      axios.delete("http://localhost:3000/user/"+code).then((res) => {
        dispatch(deleteUser());
      }).catch((err) => {
          dispatch(failRequset(err.message))
      })
  

    // },2000)
   
  };
};

export const FunctionAddUser= (data)=>{
    return(dispatch) =>{
      dispatch(makeRequset());
      axios.post("http://localhost:3000/user",data).then(res=>{
        dispatch(addUser());
        toast.success('User added successfully..')
      }).catch(err=>{
        dispatch(failRequset(err.message))
      })
    }                
}


export const FunctionEditUser =(data,code) =>{
return(dispatch) =>{
  dispatch(makeRequset());
  axios.put("http://localhost:3000/user/"+code,data).then(res =>{
    dispatch(editUser());
    toast.success("user data updated successfully...")
  }).catch(err=>{
    dispatch(failRequset(err.message))
  })
}
}

export const FetchUSerObj = (code) => {
  return (dispatch) => {
    dispatch(makeRequset());
    // setTimeout(() => {
      axios.get("http://localhost:3000/user/"+code).then((res) => {
        const userlist = res.data;
        dispatch(getUserObj(userlist));
      }).catch((err) => {
          dispatch(failRequset(err.message))
      })
  
 
    // },2000)
   
  };
};