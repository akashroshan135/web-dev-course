import React from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInput] = React.useState("");
  const [items, setItems] = React.useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setInput(value);
  }

  function addNewItem() {
    setItems([...items, inputText]);
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} />
        <button onClick={addNewItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <ToDoItem item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
