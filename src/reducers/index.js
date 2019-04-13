import {combineReducers} from "redux";
import UsersReducer from "./users";
import cartReducer from "./cart"
export default combineReducers({
    users: UsersReducer,
    cart: cartReducer
})