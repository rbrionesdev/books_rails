import React from "react";
import Book from "./Book";

const Books = ({ books }) => {
  // const Books = ({ books, deleteBook }) => {
  return (
    <div style={{ margin: "10px", border: "3px solid red" }}>
      <h1>We have {books.length} books</h1>

      {books.map((book) => (
        <Book key={book.id} {...book} />
        // <Book deleteBook={deleteBook} key={book.id} {...book} />
        // <Item key={item.id} id={item.id} likes={item.likes}/> 
        
      ))}
    </div>
  );
};

export default Books;
