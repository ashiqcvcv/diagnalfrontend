import {
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE
} from "./types";

const initialState = {
  loading: false,
  data: null,
  pageno: 1
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_REQUEST: {
      return { ...state, loading: true };
    }

    case GET_BOOKS_SUCCESS: {
      return {
        ...state,
        data: (state.data || []).concat(action.payload.books),
        loading: false,
        pageno: action.payload.pageno
      };
    }

    case GET_BOOKS_FAILURE: {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
};

export default booksReducer;
