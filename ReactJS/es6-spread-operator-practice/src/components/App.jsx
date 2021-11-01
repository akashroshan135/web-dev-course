import React from "react";

function App() {
  const [inputText, setInput] = React.useState("");
  const [items, setItems] = React.useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setInput(value);
  }

  function addNewItem() {
    setItems([...items, inputText]);
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
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
