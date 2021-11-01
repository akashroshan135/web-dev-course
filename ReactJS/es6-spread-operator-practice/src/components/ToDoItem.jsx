import React from "react";

function ToDoItem(props) {
  const [isCrossed, setIsCrossed] = React.useState(false);

  function handleClick() {
    setIsCrossed(!isCrossed);
  }

  return (
    <li
      style={{ textDecoration: isCrossed && "line-through" }}
      onClick={handleClick}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
