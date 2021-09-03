import React, { useState } from "react";

const BookForm = (props) => {
  const [title, setTitle] = useState(props.title ? props.title : "");
  const [author, setAuthor] = useState(props.author ? props.author : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.idProp) {
      props.updateBookProp({ id: props.idProp, title, author });
    } else {
    props.addBookProp({ title, author });
    setTitle("");
    setAuthor("");
    }
  };

  return (
    <div style={{ margin: "10px", border: "3px solid blue" }}>
      <h1>Book Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Title:</p>
        <input 
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <p>Author:</p>
        <input 
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <button>{props.idProp ? "update" : "add"}</button>
      </form>
    </div>
  );
};

export default BookForm;