import React from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [items, setItems] = React.useState([]);

  function addNewItem(inputText) {
    setItems([...items, inputText]);
  }

  function deleteItem(id) {
    setItems(() => {
      return items.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addButton={addNewItem} />
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem itemNo={index} item={item} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
