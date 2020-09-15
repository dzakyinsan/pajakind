import axios from "axios";
import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_LOGOUT } from "./types";
import Swal from "sweetalert2";

export const onUserLogin = (email, password) => {
  return (dispatch) => {

    if (email === "" || password === "") {
      dispatch({ type: USER_LOGIN_FAILED, payload: "email and password must be entered" });
    } else {
      axios
        .post(`https://reqres.in/api/login`, {
          email,
          password,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Signed in successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          dispatch({ type: USER_LOGIN_FAILED, payload: "user not found" });
        });
    }
  };
};

export const keepLogin = (email, password) => {
  return (dispatch) => {
    axios
      .post(`https://reqres.in/api/login`, {
        email,
        password,
      })
      .then((res) => {
        dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: USER_LOGIN_FAILED, payload: "system error" });
      });
  };
};

export const onUserLogout = () => {
  return (dispatch) => {
    Swal.fire({
      title: "Are you sure want to logout?",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "grey",
      confirmButtonText: "Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Logged out!");
        localStorage.clear();
        dispatch({ type: USER_LOGOUT });
      }
    });
  };
};
