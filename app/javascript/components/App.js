import axios from "axios";
import React, { useState } from "react";
// import ItemForm from "./ItemForm";
import Books from "./Books";

const App = () => {
  const [books, setBooks] = useState([]);
  // const [showForm, setShowForm] = useState(false);

  const getBooks = async () => {
    // does this chucnk of code and if fails goes to catch block
    try {
      // get json from our rails server
      let res = await axios.get("/books");
      setBooks(res.data);
    } catch (err) {}
  };

  // const deleteItem = async (id) => {
  //   try {
  //     // delete from db
  //     await axios.delete(`/items/${id}`);
  //     // remove from ui (state)
  //     const newItems = items.filter((i) => i.id !== id);
  //     setItems(newItems);
  //   } catch (err) {
  //     alert("failed to delete");
  //     console.log(err);
  //   }
  // };

  // const addItem = async (item) => {
  //   console.log(item);
  //   try {
  //     // add to datatbase
  //     let res = await axios.post("/items", item);
  //     console.log(res);
  //     //if successfull add to state
  //     setItems([res.data, ...items]);
  //   } catch (err) {
  //     alert("failed to create");
  //     console.log(err);
  //   }
  // };
  return (
    <div style={{ margin: "10px", border: "3px solid black" }}>
      <h1>App</h1>
      {/* <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "hide form" : "new item form"}
      </button> */}
      {/* <br /> */}
      {/* {showForm && <ItemForm addItemProp={addItem} />} */}
      <button onClick={getBooks}>get Books</button>
      
      <Books books={books} />
      {/* <Items items={items} deleteItem={deleteItem} /> */}
    </div>
  );
};

export default App;