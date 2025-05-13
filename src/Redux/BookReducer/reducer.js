import { REQUEST, SUCCESS, ERROR } from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  books: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return { ...state, isLoading: true, isError: false };
    case SUCCESS:
      return { ...state, isLoading: false, books: action.payload };
    case ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
