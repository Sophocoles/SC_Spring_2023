import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { toastOnError } from "../../django/auth/utils/Utils";
import { toast } from "react-toastify";
import { setAxiosAuthToken } from "../../django/auth/utils/Utils";

const ProviderFHIR = () => {
  const initialState = {
    patients: [],
    loading: true,
    error: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return {
          ...state,
          loading: false,
          patients: action.payload,
        };
      case "FETCH_ERROR":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error('No token found. Please login again.');
      return;
    }
  
    setAxiosAuthToken(token);

    axios
      .get("http://127.0.0.1:8000/accounts/provider_patients/")
      .then(response => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data }, console.log("Response: ", response.data));
      })
      .catch(error => {
        if (error.response) {
          console.error('Error response data:', error.response.data);
          dispatch({ type: "FETCH_ERROR", payload: error.response.data });
          toastOnError(error);
        } else {
          console.error('Error:', error.message);
          dispatch({ type: "FETCH_ERROR", payload: error.message });
          toast.error('An error occurred. Please try again later.');
        }
      });
  }, []);

  const { patients, loading, error } = state;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Provider Patients</h1>
      <pre>{JSON.stringify(patients, null, 2)}</pre>
    </div>
  );
};

export default ProviderFHIR;
