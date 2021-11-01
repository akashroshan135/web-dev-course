import React from "react";

function ToDoItem(props) {
  console.log(props.key);
  return (
    <div
      onClick={() => {
        props.onChecked(props.itemNo);
      }}
    >
      <li>{props.item}</li>;
    </div>
  );
}

export default ToDoItem;
