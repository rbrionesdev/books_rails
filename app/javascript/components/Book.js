import React from "react";

const Book = (props) => {
  // remember the {...item} in our Items component we can now grab these from props.
  const { title, author, id } = props;

  return (
    <div style={{ margin: "10px", border: "3px solid orange" }}>
      <h1>
        {id} - {title}
      </h1>
      <p>Author: {author}</p>
      
      {/* <button onClick={() => deleteItem(id)}>delete me</button> */}
    </div>
  );
};
export default Book;