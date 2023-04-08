import axios from "axios";
// import { push } from "connected-react-router"; // Remove this line
import { toast } from "react-toastify";
import { SET_TOKEN, SET_CURRENT_USER, UNSET_CURRENT_USER } from "./LoginTypes";
import { setAxiosAuthToken, toastOnError } from "../utils/Utils";


export const login = (userData, redirectTo, history) => dispatch => {  axios
    .post("http://127.0.0.1:8000/accounts/api/v1/token/login/", userData)
    .then(response => {
      const { auth_token } = response.data;
      console.log(auth_token, "Token")
      setAxiosAuthToken(auth_token);
      dispatch(setToken(auth_token));
      dispatch(getCurrentUser(redirectTo));
    })
    .catch(error => {
      dispatch(unsetCurrentUser());
      if (error.response) {
        console.log('Error response data:', error.response.data);
        toastOnError(error);
      } else {
        console.error('Error:', error.message);
        toast.error('An error occurred. Please try again later.');
      }
    });
    
};

export const getCurrentUser = (redirectTo, history) => dispatch => {  axios
    .get("http://127.0.0.1:8000/accounts/api/v1/users/me/")
    .then(response => {
      console.log(response.data); // Add this line to check the received data
      const user = {
        username: response.data.username,
        email: response.data.email
      };
      dispatch(setCurrentUser(user, redirectTo));
    })
    .catch(error => {
      dispatch(unsetCurrentUser());
      if (error.response) {
        if (
          error.response.status === 401 &&
          error.response.hasOwnProperty("data") &&
          error.response.data.hasOwnProperty("detail") &&
          error.response.data["detail"] === "User inactive or deleted."
        ) {
          history.push("/resend_activation");
        }
      } else {
        toastOnError(error);
      }
    });
};

export const setCurrentUser = (user, redirectTo, history) => dispatch => {
    localStorage.setItem("user", JSON.stringify(user));
  dispatch({
    type: SET_CURRENT_USER,
    payload: user
  });

  if (redirectTo !== "") {
    history.push(redirectTo);
  }
};

export const setToken = token => dispatch => {
  setAxiosAuthToken(token);
  localStorage.setItem("token", token);
  dispatch({
    type: SET_TOKEN,
    payload: token
  });
};

export const unsetCurrentUser = () => dispatch => {
  setAxiosAuthToken("");
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  dispatch({
    type: UNSET_CURRENT_USER
  });
};

export const logout = (history) => dispatch => {
    axios
    .post("http://127.0.0.1:8000/accounts/api/v1/token/logout/")
    .then(response => {
      dispatch(unsetCurrentUser());
      history.push("/");
      toast.success("Logout successful.");
    })
    .catch(error => {
      dispatch(unsetCurrentUser());
      toastOnError(error);
    });
};