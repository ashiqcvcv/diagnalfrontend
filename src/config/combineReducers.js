import { combineReducers } from "redux";
import booksReducer from "../redux/books/reducer";
import PageReducer from '../redux/page/reducer';

const rootReducer = combineReducers({
  books: booksReducer, pageno: PageReducer
});

export default rootReducer;
