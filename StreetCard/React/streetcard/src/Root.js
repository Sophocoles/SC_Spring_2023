import React from "react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";

import rootReducer from "./Reducer";
import { setCurrentUser, setToken } from "./components/django/auth/login/LoginActions";
import { isEmpty } from "./components/django/auth/utils/Utils";

const Root = ({ children, initialState = {} }) => {
  const middleware = [thunk];

  const store = createStore(
    rootReducer(),
    initialState,
    applyMiddleware(...middleware)
  );

  if (!isEmpty(localStorage.getItem("token"))) {
    store.dispatch(setToken(localStorage.getItem("token")));
  }
  if (!isEmpty(localStorage.getItem("user"))) {
    const user = JSON.parse(localStorage.getItem("user"));
    store.dispatch(setCurrentUser(user, ""));
  }

  return (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
};

export default Root;
