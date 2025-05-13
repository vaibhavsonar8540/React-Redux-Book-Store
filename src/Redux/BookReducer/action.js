import axios from "axios";
import { REQUEST, SUCCESS, ERROR } from "./actionTypes";

export const getBooks = () => async (dispatch) => {
  dispatch({ type: REQUEST });
  try {
    const res = await axios.get(" http://localhost:3000/books");
    dispatch({ type: SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: ERROR, payload: err.message });
  }
};

export const editBook = (id,editdata)=>(dispatch) => {
  // Write logic here

  axios.patch(`http://localhost:3000/books/${id}`,editdata)
  .then((res)=>{
    alert("book Update Successfully")
    getBooks(dispatch)
  })
  .catch((err)=>console.log(err))


};

// For testing
if (window.Cypress) {
  window.getBooks = getBooks;
  window.editBook = editBook;
}
