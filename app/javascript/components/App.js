import axios from "axios";
import React, { useState } from "react";
import BookForm from "./BookForm";
import Books from "./Books";

const App = () => {
  const [books, setBooks] = useState([]);
  const [showForm, setShowForm] = useState(true);

  const getBooks = async () => {
    // does this chunk of code and if fails goes to catch block
    try {
      // get json from our rails server
      let res = await axios.get("/books");
      setBooks(res.data);
    } catch (err) {}
  };

  const deleteBook = async (id) => {
    try {
      // delete from db
      await axios.delete(`/books/${id}`);
      // remove from ui (state)
      const newBooks = books.filter((b) => b.id !== id);
      setBooks(newBooks);
    } catch (err) {
      alert("failed to delete");
      console.log(err);
    }
  };

  const updateBook = async (book) => {
    console.log(book);
    try {
      let res = await axios.put(`books/${book.id}`, book);
      let newBooks = books.map((b) => (b.id == book.id ? book : b));
      setBooks(newBooks);
      // here is where I want to close the edit
    } catch (err) {
      alert("err");
    }
  };

  const addBook = async (book) => {
    console.log(book);
    try {
      // add to datatbase
      let res = await axios.post("/books", book);
      console.log(res);
      //if successfull add to state
      setBooks([res.data, ...books]);
    } catch (err) {
      alert("failed to create book");
      console.log(err);
    }
  };

  ////////////////////////////////////////////////////////////////////////////////

  return (
    <div style={{ margin: "10px", border: "3px solid black" }}>
      <h1>Book | App</h1>
      {/* Hidden BookForm onClick action */}
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "New Book Form"}
      </button>
      <br />
      {/* Call BookForm Component and goes addBookProp */}
      {showForm && <BookForm addBookProp={addBook} />}
      {/* Add button to getBook */}
      <button onClick={getBooks}>Get Books</button>
      {/* Call Books Component and goes booksProp and deleteBookProp */}
      <Books 
        booksProp={books} 
        deleteBookProp={deleteBook}
        updateBookProp={updateBook} 
      />
    </div>
  );
};

export default App;