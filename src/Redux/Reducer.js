import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  FAIL_REQUSET,
  GET_USER_LIST,
  GET_USER_OBJ,
  MAKE_REQUEST,
} from "./ActionType";

const initialState = {
  loading: true,
  userlist: [],
  userobj: [],
  errormessage: "",
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FAIL_REQUSET:
      return {
        ...state,
        loading: false,
        errormessage: action.payload,
      };

    case GET_USER_LIST:
      return {
        loading: false,
        userlist: action.payload,
        errormessage: "",
        userobj: {},
      };
    case DELETE_USER:
      return {
        ...state,
        loading: false,
      };

    case ADD_USER:
      return {
        ...state,
        loading: false,
      };
    case EDIT_USER:
      return {
        ...state,
        loading: false,
      };
    case GET_USER_OBJ:
      return {
        ...state,
        loading: false,
        userobj: action.payload
      };
    
    default:
      return state;
  }
};
