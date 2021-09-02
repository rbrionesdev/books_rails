import React from "react";

const Book = (props) => {
  // remember the {...book_to_props} in our Books component we can now grab these from props.
  const { title, author, id, deleteBookProp } = props; // extraigo de props title, author, id

  return (
    <div style={{ margin: "10px", border: "3px solid orange" }}>
      <h1>
        {id} - {title}
      </h1>
      <p>Author: {author}</p>
      {/* Add delete buttton  */}
      <button onClick={() => deleteBookProp(id)}>Delete Me</button>
    </div>
  );
};
export default Book;