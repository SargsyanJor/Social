import { combineReducers, createStore,applyMiddleware } from "redux";
import { usersReducer } from "./reducers/usersReducer";
import { thunk } from "redux-thunk";



const rootReduser = combineReducers({
    usersData : usersReducer
})



export const store  = createStore(rootReduser,applyMiddleware(thunk))