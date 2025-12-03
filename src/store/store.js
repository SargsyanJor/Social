import { combineReducers, createStore, applyMiddleware } from "redux";
import { usersReducer } from "./reducers/usersReducer";
import { thunk } from "redux-thunk";
import { loginReducer } from "./reducers/loginReducer";
import { profileReducer } from "./reducers/profileReducer";

const rootReduser = combineReducers({
  usersData: usersReducer,
  authData: loginReducer,
  profileData: profileReducer,
});

export const store = createStore(rootReduser, applyMiddleware(thunk));
