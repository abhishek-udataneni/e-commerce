import {combineReducers} from "redux";
import BooksReducer from "./books";
import cartReducer from "./cart"
export default combineReducers({
    books: BooksReducer,
    cart: cartReducer
})