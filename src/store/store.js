import { combineReducers, createStore,applyMiddleware } from "redux";
import { usersReducer } from "./reducers/usersReducer";
import { thunk } from "redux-thunk";
import { loginReducer } from "./reducers/loginReducer";



const rootReduser = combineReducers({
    usersData : usersReducer,
    authData : loginReducer
})



export const store  = createStore(rootReduser,applyMiddleware(thunk))
