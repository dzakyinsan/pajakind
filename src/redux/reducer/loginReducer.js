import { USER_LOGIN_FAILED, USER_LOGIN_SUCCESS,USER_LOGOUT } from "./../action/types";

const INITIAL_STATE = {
  token: "",
  message: "",
  login:false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return { ...state, token: action.payload,login:true };
    case USER_LOGIN_FAILED:
      return { ...state, message: action.payload };
    case USER_LOGOUT:
        return{...state,login:false}
    default:
      return state;
  }
};
