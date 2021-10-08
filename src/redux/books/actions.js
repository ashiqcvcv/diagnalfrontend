import { getBooks } from "../../api/apiServices";
import {
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE
} from "./types";

export const getBooksAction = (pageno) => {
  return {
    api: true,
    types: [GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE],
    request: () => getBooks(pageno),
    formatRes: (res) => {
      return {
        books: res?.data?.page["content-items"]?.content || [],
        pageno
      };
    },
    onSuccess: () => {},
    onFailure: () => {},
    showFailureMessage: true,
  };
};
