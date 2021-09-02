import React from "react";
import Book from "./Book";

const Books = ({ booksProp, deleteBookProp }) => {
  return (
    <div style={{ margin: "10px", border: "3px solid red" }}>
      <h1>We have {booksProp.length} books</h1>

      {booksProp.map((bookProp) => (
        <Book deleteBookProp={deleteBookProp} key={bookProp.id} {...bookProp} />
        // <Book key={book.id} | {...bookProp} => id={book.id} title={book.title} author={book.author} | /> 
        
      ))}
    </div>
  );
};

export default Books;
