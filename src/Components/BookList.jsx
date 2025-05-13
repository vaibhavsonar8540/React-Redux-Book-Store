import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/BookReducer/action";
import { BookCard } from "./BookCard";

export const BookList = () => {
  const { isLoading, isError, books } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error loading books</h1>;

  return (
    <div
      data-testid="book-list"
      style={{ display: "flex", flexWrap: "wrap", width: "70%" }}
    >
      {books.map((el) => (
        <BookCard
          key={el.id}
          id={el.id}
          name={el.book_name}
          image={el.cover_photo}
          author={el.author}
          category={el.category}
          year={el.release_year}
          chapter={el.no_of_chapters}
        />
      ))}
    </div>
  );
};
