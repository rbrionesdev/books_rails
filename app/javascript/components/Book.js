import React, {useState} from "react";
import BookForm from "./BookForm";

const Book = (props) => {
  // remember the {...book_to_props} in our Books component we can now grab these from props.
  const { title, author, id, deleteBookProp, updateBookProp } = props; // extraigo de props title, author, id
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{ margin: "10px", border: "3px solid orange" }}>
      <h1>
        {id} - {title}
      </h1>
      <p>Author: {author}</p>
      {/* Add delete buttton  */}
      <button onClick={() => deleteBookProp(id)}>Delete</button>
      {/* ShowForm-Edit and call BookForm (reuse)  */}
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel Edit" : "Edit"}
      </button>
      {showForm && (
        <BookForm 
          updateBookProp={updateBookProp}
          titleProp={title}
          authorProp={author}
          idProp={id}
        />
      )}
    </div>
  );
};
export default Book;