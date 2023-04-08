import { combineReducers } from "redux";
import { signupReducer } from "./components/django/auth/signup/SignupReducer";



const createRootReducer = history =>
  combineReducers({
    createUser: signupReducer // <--- add it here
  });

export default createRootReducer;