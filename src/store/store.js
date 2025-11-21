import { combineReducers, createStore } from "redux";
import { usersReducer } from "./reducers/usersReducer";
    
const rootReduser = combineReducers({
    usersData : usersReducer
})

export const store  = createStore(rootReduser)