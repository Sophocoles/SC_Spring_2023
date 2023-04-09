import axios from "axios";
import { toast } from "react-toastify";
import { SET_TOKEN, SET_CURRENT_USER, UNSET_CURRENT_USER } from "./LoginTypes";
import { setAxiosAuthToken, toastOnError } from "../utils/Utils";
import { useNavigate } from "react-router-dom";


export const login = (userData, redirectTo) => dispatch => {
  axios
    .post("http://127.0.0.1:8000/accounts/api/v1/token/login/", userData)
    .then(response => {
    const { access: accessToken } = response.data;
      console.log(accessToken, "<---AccessToken");
      console.log("Response data:", response.data);
      setAxiosAuthToken(accessToken);
      dispatch(setToken(accessToken));
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

export const getCurrentUser = (redirectTo) => dispatch => {
    const token = localStorage.getItem("token");
    console.log("GetCurrentUser token: ", token)
    if (!token) {
      dispatch(unsetCurrentUser());
      toast.error('No token found. Please login again.');
      return;
    }
    
    // Set the token in Axios headers
    setAxiosAuthToken(token);
  
    axios
      .get("http://127.0.0.1:8000/accounts/api/v1/users/me/")
      .then(response => {
        console.log(response.data, "Response");
        const user = {
          username: response.data.username,
          email: response.data.email
        };
        dispatch(setCurrentUser(user, redirectTo));
      })
      .catch(error => {
        dispatch(unsetCurrentUser());
        if (error.response) {
          console.error('Error response data:', error.response.data);
          toastOnError(error);
        } else {
          console.error('Error:', error.message);
          toast.error('An error occurred. Please try again later.');
        }
      });
  };
  
  

export const setCurrentUser = (user, redirectTo) => dispatch => {
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({
      type: SET_CURRENT_USER,
      payload: user
    });
  
    const navigate = useNavigate();
  
    if (redirectTo !== "") {
      navigate(redirectTo);
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

export const logout = navigate => dispatch => {
    axios
      .post("http://127.0.0.1:8000/accounts/api/v1/token/logout/")
      .then(response => {
        dispatch(unsetCurrentUser());
        navigate("/");
        toast.success("Logout successful.");
      })
      .catch(error => {
        dispatch(unsetCurrentUser());
        toastOnError(error);
      });
  };
  
